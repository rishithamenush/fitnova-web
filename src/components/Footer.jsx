const exploreLinks = [
  { href: '#features', label: 'Features' },
  { href: '#programs', label: 'Programs' },
  { href: '#muscles', label: 'Muscles' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#reviews', label: 'Reviews' },
]

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.15A4 4 0 1 1 16 12a4 4 0 0 1-4 3.99zm7.85-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.9 2.9 0 1 1-2.31-2.84v-3.5a6.37 6.37 0 1 0 5.76 6.34V8.69a8.2 8.2 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-1-.06z" />
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__watermark" aria-hidden="true">
        FITNOVA
      </div>

      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <a href="#top" className="navbar__brand">
              <img src="/images/logo.png" alt="FitNova logo" />
              <span>
                Fit<em>Nova</em>
              </span>
            </a>
            <p className="footer__tagline">
              Your smart gym companion. Rolling workout cycles, target-muscle
              guidance and effortless progress tracking - built for men and
              women.
            </p>
            <div className="footer__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Explore</h4>
            <ul className="footer__links">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__app-col">
            <h4>Get the app</h4>
            <p>Free to download. No subscription, no ads - just training.</p>
            <div className="footer__stores">
              <a href="#" className="store-btn" aria-label="Download on the App Store">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                  <path d="M17.05 12.54c-.03-2.96 2.42-4.38 2.53-4.45-1.38-2.01-3.52-2.29-4.28-2.32-1.82-.18-3.55 1.07-4.47 1.07-.92 0-2.35-1.04-3.86-1.01-1.99.03-3.82 1.15-4.84 2.93-2.06 3.58-.53 8.88 1.48 11.79 1 1.42 2.18 3.02 3.74 2.96 1.5-.06 2.07-.97 3.88-.97 1.81 0 2.32.97 3.9.94 1.61-.03 2.63-1.45 3.62-2.88 1.14-1.65 1.6-3.25 1.63-3.33-.04-.02-3.12-1.2-3.33-4.73zM14.1 3.85c.82-1 1.38-2.39 1.23-3.77-1.19.05-2.62.79-3.47 1.79-.76.88-1.43 2.3-1.25 3.65 1.32.1 2.67-.67 3.49-1.67z" />
                </svg>
                <span>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </span>
              </a>
              <a href="#" className="store-btn" aria-label="Get it on Google Play">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path d="M3.6 1.8c-.36.38-.57.96-.57 1.71v17c0 .75.21 1.33.58 1.7l.09.08L13.23 12.8v-.21L3.7 1.71l-.1.09zm12.8 14.18-3.17-3.18v-.21l3.18-3.18.07.04 3.76 2.14c1.08.6 1.08 1.6 0 2.21l-3.76 2.14-.08.04zm-.08-6.61L13.06 12l3.26 2.63 3.84-2.18c1.08-.62 1.08-1.62 0-2.23l-3.84-2.19v.34zM3.84 22.6l9.39-9.42 3.09 3.1L4.9 22.92c-.4.23-.76.2-1.06-.32zm0-21.2c.3-.52.66-.55 1.06-.32l11.42 6.64-3.09 3.1L3.84 1.4z" />
                </svg>
                <span>
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} FitNova. All rights reserved.
          </p>
          <p className="footer__motto">
            Train <em>smarter</em>. Look <em>stronger</em>.
          </p>
          <a href="#top" className="footer__top-link">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
