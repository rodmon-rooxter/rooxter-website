import { useEffect, useState } from 'react'
import type { Project, ProjectSlide } from '../../data/projects'

const MIN_HOLD_DURATION = 4000
const MAX_HOLD_DURATION = 10000
const FADE_DURATION = 800

const getRandomHoldDuration = () =>
  Math.floor(Math.random() * (MAX_HOLD_DURATION - MIN_HOLD_DURATION + 1)) +
  MIN_HOLD_DURATION

type ProjectCardProps = {
  project: Project
  index: number
  featured?: boolean
}

type SlideshowPhase = 'visible' | 'fading-out' | 'fading-in'

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    query.addEventListener('change', updatePreference)
    return () => query.removeEventListener('change', updatePreference)
  }, [])

  return prefersReducedMotion
}

function ProjectSlideshow({ slides, index }: { slides: ProjectSlide[]; index: number }) {
  const [slideIndex, setSlideIndex] = useState(0)
  const [phase, setPhase] = useState<SlideshowPhase>('visible')
  const prefersReducedMotion = usePrefersReducedMotion()
  const activeSlide = slides.length > 0 ? slides[slideIndex % slides.length] : undefined

  useEffect(() => {
    if (slides.length < 2) return

    const nextSlide = slides[(slideIndex + 1) % slides.length]
    const preload = new Image()
    preload.src = nextSlide.src
  }, [slideIndex, slides])

  useEffect(() => {
    if (slides.length < 2 || prefersReducedMotion) return

    const duration = phase === 'visible' ? getRandomHoldDuration() : FADE_DURATION
    const timer = window.setTimeout(() => {
      if (phase === 'visible') {
        setPhase('fading-out')
      } else if (phase === 'fading-out') {
        setSlideIndex((currentIndex) => (currentIndex + 1) % slides.length)
        setPhase('fading-in')
      } else {
        setPhase('visible')
      }
    }, duration)

    return () => window.clearTimeout(timer)
  }, [phase, prefersReducedMotion, slides.length])

  if (!activeSlide) {
    return (
      <div className="media-placeholder" aria-hidden="true">
        <span>{String(index + 1).padStart(2, '0')}</span>
      </div>
    )
  }

  return (
    <img
      className={`slideshow-image slideshow-image--${phase}`}
      src={activeSlide.src}
      alt={activeSlide.alt}
      width="1920"
      height="1080"
      loading="lazy"
    />
  )
}

function FeaturedProjectCard({ project, index }: Omit<ProjectCardProps, 'featured'>) {
  const metadata = [project.category, project.year].filter(Boolean).join(' · ')
  const slides = project.slides ?? []

  return (
    <article className="project-card project-card--featured">
      <div className="project-media">
        <ProjectSlideshow slides={slides} index={index} />
        <div className="project-overlay">
          <h3>{project.title}</h3>
          <p>{metadata}</p>
        </div>
      </div>
    </article>
  )
}

export default function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  if (featured) {
    return <FeaturedProjectCard project={project} index={index} />
  }

  const metadata = [project.category, project.year].filter(Boolean).join(' · ')

  return (
    <article className="project-card">
      <div className="project-media">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt ?? `Still from ${project.title}`}
            width="1600"
            height="900"
            loading="lazy"
          />
        ) : (
          <div className="media-placeholder" aria-hidden="true">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{project.title}</strong>
          </div>
        )}
      </div>
      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{metadata}</p>
      </div>
    </article>
  )
}
