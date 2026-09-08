const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href="#top" aria-label="Rooxter Films, home">
          <img
            src="/images/logos/rooxter-logo.webp"
            width="1392"
            height="1956"
            alt=""
          />
          <span>Rooxter Films</span>
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          <span className="nav-label" aria-hidden="true">Menu</span>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
