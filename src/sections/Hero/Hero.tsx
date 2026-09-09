import { useParallax } from '../../hooks/useParallax'

export default function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>()

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero-background"
        src="/images/hero/rooxter-hero.webp"
        width="1920"
        height="1080"
        alt=""
        fetchPriority="high"
      />
      <div className="site-container hero-copy">
        <div ref={parallaxRef} className="parallax-text">
          <h1 id="hero-title">We make stories.</h1>
          <p>Film · Animation · Visual Effects</p>
        </div>
      </div>
    </section>
  )
}
