export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid-bg" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="chip reveal">
            <span className="chip__dot" /> YOUR SMART GYM COMPANION
          </span>
          <h1 className="reveal">
            Train
            <span className="text-lime"> smarter.</span>
            <br />
            Look <span className="text-stroke">stronger.</span>
          </h1>
          <p className="reveal">
            Rolling workout cycles, target-muscle guidance and effortless
            progress tracking — one focused app, built for men and women.
          </p>
          <div className="hero__actions reveal">
            <a href="#download" className="btn btn--lime btn--lg">
              Download Free
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#programs" className="btn btn--ghost btn--lg">
              <span className="btn__play">▶</span> See it in action
            </a>
          </div>
          <div className="hero__trust reveal">
            <div className="hero__avatars">
              <span>RM</span><span>JD</span><span>AK</span><span>+</span>
            </div>
            <div>
              <div className="hero__stars">★★★★★ <b>4.9</b></div>
              <small>10,000+ athletes train with FitNova</small>
            </div>
          </div>
        </div>

        <div className="hero__visual reveal">
          <div className="phone-stage">
            <div className="phone">
              <div className="phone__notch" />
              <img src="/images/gym-workout.png" alt="FitNova workout session" />
              <div className="phone__overlay" />
              <div className="phone__label">
                <small>TODAY · DAY 1</small>
                <strong>Chest &amp; Triceps</strong>
                <span>6 exercises · 18 sets · ~60 min</span>
                <div className="phone__progress">
                  <i style={{ width: '64%' }} />
                </div>
              </div>
            </div>

            <div className="float-card float-card--streak">
              <span className="float-card__icon">🔥</span>
              <div>
                <strong>12 day streak</strong>
                <small>Keep it burning</small>
              </div>
            </div>

            <div className="float-card float-card--done">
              <span className="float-card__icon float-card__icon--lime">✓</span>
              <div>
                <strong>Workout complete</strong>
                <small>418 kcal · 52 min</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
