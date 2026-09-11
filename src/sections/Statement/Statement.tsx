import { useEffect, useState } from 'react'

const slides = [
  'projects/hearts-of-stone-02.webp',
  'projects/martin-clune-04.webp',
  'projects/breathe-04.webp',
  'selected-work/the-searhorse-trainer-01.webp',
  'projects/ostrich-teaser-03.webp',
  'projects/revolves-around-02.webp',
  'projects/rust-and-dust-01.webp',
  'selected-work/suffer-04.webp',
  'projects/thunderbird-01.webp',
  'projects/unicorn-code-01.webp',
  'selected-work/like-this-05.webp',
]

export default function Statement() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="statement">
      <div className="statement-bg" aria-hidden="true">
        {slides.map((path, index) => (
          <img
            key={path}
            src={`${import.meta.env.BASE_URL}images/${path}`}
            alt=""
            className={index === activeIndex ? 'active' : ''}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
    </section>
  )
}
