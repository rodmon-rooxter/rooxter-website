import { useParallax } from '../../hooks/useParallax'

export default function Contact() {
  const parallaxRef = useParallax<HTMLHeadingElement>(0.32, 160, 14)

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="site-container contact-inner">
        <h2 ref={parallaxRef} id="contact-title">Let's make something.</h2>
        <a className="contact-email" href="mailto:info@rooxterfilms.com">
          info@rooxterfilms.com
        </a>
      </div>
    </section>
  )
}
