export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__watermark" aria-hidden="true">
        FITNOVA
      </div>
      <div className="container footer__inner">
        <a href="#top" className="navbar__brand">
          <img src="/images/logo.png" alt="FitNova logo" />
          <span>
            Fit<em>Nova</em>
          </span>
        </a>
        <ul className="footer__links">
          <li><a href="#features">Features</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#download">Download</a></li>
        </ul>
        <p className="footer__copy">
          © {new Date().getFullYear()} FitNova. Train smarter, look stronger.
        </p>
      </div>
    </footer>
  )
}
