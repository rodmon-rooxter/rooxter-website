export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <img
          src="/images/logos/rooxter-logo.webp"
          width="1392"
          height="1956"
          alt=""
          fetchPriority="high"
        />
      </div>
      <div className="site-container hero-copy">
        <h1 id="hero-title">We make stories.</h1>
        <p>Film · Animation · Visual Effects</p>
      </div>
    </section>
  )
}
