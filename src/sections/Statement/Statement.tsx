import { useEffect, useState } from 'react'

const statementImages = import.meta.glob(
  '/public/images/statement/*.{avif,gif,jpeg,jpg,png,webp}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>

const slides = Object.entries(statementImages)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([, url]) => url)

export default function Statement() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || slides.length < 2) return

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
            src={path}
            alt=""
            className={index === activeIndex ? 'active' : ''}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
    </section>
  )
}
