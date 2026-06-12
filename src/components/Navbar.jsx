import { useEffect, useState } from 'react'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#programs', label: 'Programs' },
  { href: '#muscles', label: 'Muscles' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#reviews', label: 'Reviews' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container">
        <a href="#top" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="FitNova logo" />
          <span>
            Fit<em>Nova</em>
          </span>
        </a>

        <ul className={`navbar__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="navbar__links-cta">
            <a href="#download" className="btn btn--lime" onClick={() => setOpen(false)}>
              Get the App
            </a>
          </li>
        </ul>

        <a href="#download" className="btn btn--lime navbar__cta">
          Get the App
        </a>

        <button
          className="navbar__burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  )
}
