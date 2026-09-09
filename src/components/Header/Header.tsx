import { useEffect, useRef, useState } from 'react'

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isLogoVisible, setIsLogoVisible] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const idleTimer = useRef<number | undefined>(undefined)
  const logoButton = useRef<HTMLButtonElement>(null)
  const firstMenuLink = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const isSectionOneActive = () => {
      const hero = document.getElementById('top')
      if (!hero) return window.scrollY <= 1

      const rect = hero.getBoundingClientRect()
      return rect.bottom > 0 && rect.top < window.innerHeight
    }

    const scheduleHide = () => {
      window.clearTimeout(idleTimer.current)

      if (isMenuOpen || isSectionOneActive()) return

      idleTimer.current = window.setTimeout(() => setIsLogoVisible(false), 3000)
    }

    const revealLogo = () => {
      setIsLogoVisible(true)
      scheduleHide()
    }

    scheduleHide()
    window.addEventListener('scroll', revealLogo, { passive: true })
    window.addEventListener('resize', scheduleHide)

    return () => {
      window.removeEventListener('scroll', revealLogo)
      window.removeEventListener('resize', scheduleHide)
      window.clearTimeout(idleTimer.current)
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusFrame = requestAnimationFrame(() => firstMenuLink.current?.focus())

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return

      setIsMenuOpen(false)
      requestAnimationFrame(() => logoButton.current?.focus())
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      cancelAnimationFrame(focusFrame)
      window.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  const goToSection = (href: string) => {
    const destination = document.querySelector<HTMLElement>(href)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setIsMenuOpen(false)
    requestAnimationFrame(() => {
      destination?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      })
      window.history.replaceState(null, '', href)
    })
  }

  return (
    <>
      <button
        ref={logoButton}
        className={`brand${isLogoVisible ? '' : ' brand--hidden'}`}
        type="button"
        aria-label={isMenuOpen ? 'Close site navigation' : 'Open site navigation'}
        aria-controls="site-menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
      >
        <img
          src={`${import.meta.env.BASE_URL}images/logos/rooxter-logo.webp`}
          width="1392"
          height="1956"
          alt=""
        />
      </button>

      <header className="site-header">
        <div className="site-container header-inner">
          <nav className="primary-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="menu-overlay"
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <nav className="menu-overlay-nav" aria-label="Section navigation">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstMenuLink : undefined}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault()
                  goToSection(item.href)
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
