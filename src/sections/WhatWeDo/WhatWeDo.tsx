import { useLayoutEffect, useRef } from 'react'
import { useParallax } from '../../hooks/useParallax'
import { serviceGroups } from '../../data/services'

export default function WhatWeDo() {
  const parallaxRef = useParallax<HTMLHeadingElement>()
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    if (!section) return

    section.classList.add('services--motion-ready')

    const observer = new IntersectionObserver(
      ([entry]) => {
        section.classList.toggle('services--visible', entry.isIntersecting)
      },
      {
        rootMargin: '-12% 0px -12% 0px',
        threshold: 0.08,
      },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      section.classList.remove('services--motion-ready', 'services--visible')
    }
  }, [])

  return (
    <section ref={sectionRef} className="section services" aria-labelledby="services-title">
      <div className="site-container">
        <h2 ref={parallaxRef} className="section-title services-title" id="services-title">What We Do</h2>
        <div className="services-grid">
          {serviceGroups.map((group) => (
            <div className="service-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.services.map((service) => <li key={service}>{service}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
