import { useEffect, useState } from 'react'

const slides = [
  'hearts-of-stone-02.webp',
  'martin-clune-04.webp',
  'breathe-04.webp',
  'the-searhorse-trainer-01.webp',
  'ostrich-teaser-03.webp',
  'revolves-around-02.webp',
  'rust-and-dust-01.webp',
  'suffer-04.webp',
  'thunderbird-01.webp',
  'unicorn-code-01.webp',
  'like-this-05.webp',
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
        {slides.map((filename, index) => (
          <img
            key={filename}
            src={`${import.meta.env.BASE_URL}images/projects/${filename}`}
            alt=""
            className={index === activeIndex ? 'active' : ''}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
    </section>
  )
}
