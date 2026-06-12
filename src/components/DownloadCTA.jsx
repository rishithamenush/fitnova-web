export default function DownloadCTA() {
  return (
    <section className="section" id="download">
      <div className="container">
        <div className="cta reveal">
          <div className="cta__glow" />
          <div className="cta__copy">
            <h2>
              Your next PR
              <br />
              starts today.
            </h2>
            <p>
              Download FitNova free and turn every gym session into progress —
              no subscription, no ads, just training.
            </p>
            <div className="cta__buttons">
              <a href="#" className="store-btn" aria-label="Download on the App Store">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
                  <path d="M17.05 12.54c-.03-2.96 2.42-4.38 2.53-4.45-1.38-2.01-3.52-2.29-4.28-2.32-1.82-.18-3.55 1.07-4.47 1.07-.92 0-2.35-1.04-3.86-1.01-1.99.03-3.82 1.15-4.84 2.93-2.06 3.58-.53 8.88 1.48 11.79 1 1.42 2.18 3.02 3.74 2.96 1.5-.06 2.07-.97 3.88-.97 1.81 0 2.32.97 3.9.94 1.61-.03 2.63-1.45 3.62-2.88 1.14-1.65 1.6-3.25 1.63-3.33-.04-.02-3.12-1.2-3.33-4.73zM14.1 3.85c.82-1 1.38-2.39 1.23-3.77-1.19.05-2.62.79-3.47 1.79-.76.88-1.43 2.3-1.25 3.65 1.32.1 2.67-.67 3.49-1.67z" />
                </svg>
                <span>
                  <small>Download on the</small>
                  <strong>App Store</strong>
                </span>
              </a>
              <a href="#" className="store-btn" aria-label="Get it on Google Play">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                  <path d="M3.6 1.8c-.36.38-.57.96-.57 1.71v17c0 .75.21 1.33.58 1.7l.09.08L13.23 12.8v-.21L3.7 1.71l-.1.09zm12.8 14.18-3.17-3.18v-.21l3.18-3.18.07.04 3.76 2.14c1.08.6 1.08 1.6 0 2.21l-3.76 2.14-.08.04zm-.08-6.61L13.06 12l3.26 2.63 3.84-2.18c1.08-.62 1.08-1.62 0-2.23l-3.84-2.19v.34zM3.84 22.6l9.39-9.42 3.09 3.1L4.9 22.92c-.4.23-.76.2-1.06-.32zm0-21.2c.3-.52.66-.55 1.06-.32l11.42 6.64-3.09 3.1L3.84 1.4z" />
                </svg>
                <span>
                  <small>Get it on</small>
                  <strong>Google Play</strong>
                </span>
              </a>
            </div>
          </div>
          <div className="cta__visual">
            <img src="/images/gym-workout-women.png" alt="Athlete training with FitNova" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
