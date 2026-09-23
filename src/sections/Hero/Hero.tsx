import { useParallax } from '../../hooks/useParallax'

export default function Hero() {
  const parallaxRef = useParallax<HTMLDivElement>()

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <video
        className="hero-background"
        src={`${import.meta.env.BASE_URL}videos/hero/rooxter-hero-v01.mp4`}
        poster={`${import.meta.env.BASE_URL}images/hero/rooxter-hero.webp`}
        width="1920"
        height="1080"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="site-container hero-copy">
        <div ref={parallaxRef} className="parallax-text">
          <h1 id="hero-title">Rooxter films</h1>
          <p>Film · Animation · Visual Effects</p>
        </div>
      </div>
    </section>
  )
}
