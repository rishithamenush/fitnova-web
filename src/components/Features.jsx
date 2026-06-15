/* Bento-style feature grid with a cursor-following spotlight on each card. */

const spotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function Card({ area, title, text, children, delay = 0 }) {
  return (
    <article
      className={`bento-card bento-card--${area} reveal`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseMove={spotlight}
    >
      <div className="bento-card__inner">
        <h3>{title}</h3>
        <p>{text}</p>
        {children}
      </div>
    </article>
  )
}

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section__head reveal">
          <span className="chip">
            <span className="chip__dot" /> WHY FITNOVA
          </span>
          <h2>
            Everything you need.
            <br />
            <span className="text-stroke">Nothing you don&apos;t.</span>
          </h2>
        </div>

        <div className="bento">
          <Card
            area="a"
            title="Rolling workout cycles"
            text="Build your own split - Day 1, Day 2, Day 3, Rest - and FitNova rolls it forward forever. No weekday lock-in, no missed plans."
          >
            <div className="cycle-pills">
              <span className="is-on">Day 1</span>
              <i>→</i>
              <span className="is-on">Day 2</span>
              <i>→</i>
              <span className="is-on">Day 3</span>
              <i>→</i>
              <span>Rest</span>
              <i>↻</i>
            </div>
          </Card>

          <Card
            area="b"
            title="Target-muscle guidance"
            text="Every session shows exactly which muscles you hit, with visual guides for men and women."
            delay={60}
          >
            <img
              className="bento-card__figure"
              src="/images/svg.png"
              alt="Full body muscle guide"
              loading="lazy"
            />
          </Card>

          <Card
            area="c"
            title="Today-only focus"
            text="Only today's scheduled workout can start. Stay on plan - no skipping ahead."
            delay={120}
          >
            <div className="mini-lock">
              <span className="is-open">Legs &amp; Biceps · Today</span>
              <span>🔒 Shoulders &amp; Back</span>
            </div>
          </Card>

          <Card
            area="d"
            title="Streaks & progress"
            text="Daily streaks, weekly goals and history keep motivation as strong as your lifts."
            delay={180}
          >
            <div className="mini-bars">
              <i style={{ height: '40%' }} />
              <i style={{ height: '65%' }} />
              <i style={{ height: '50%' }} />
              <i style={{ height: '80%' }} />
              <i style={{ height: '60%' }} />
              <i style={{ height: '95%' }} className="is-hot" />
              <i style={{ height: '74%' }} />
            </div>
          </Card>

          <Card
            area="e"
            title="Set-by-set tracking"
            text="Run sessions set by set with rest timers and instructions - pause anytime and resume right where you left off."
            delay={240}
          >
            <div className="mini-sets">
              <span className="done">Set 1 ✓</span>
              <span className="done">Set 2 ✓</span>
              <span className="now">Set 3 · 00:42</span>
              <span>Set 4</span>
            </div>
          </Card>

          <Card
            area="f"
            title="Made for you"
            text="Pick your profile and the whole app adapts - artwork, muscle guides and plans."
            delay={300}
          >
            <div className="mini-toggle">
              <span className="is-active">Men</span>
              <span>Women</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
