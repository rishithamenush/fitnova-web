const steps = [
  {
    n: '01',
    title: 'Set your cycle',
    text: 'Choose a start date and arrange your training days and rest days. FitNova repeats the cycle for you, forever.',
  },
  {
    n: '02',
    title: "Open today's workout",
    text: 'The app surfaces exactly what is scheduled today - warm-up, exercises, sets and reps, with full instructions.',
  },
  {
    n: '03',
    title: 'Train & track',
    text: 'Tick off sets with the built-in timer, finish your session and watch streaks, history and weekly goals grow.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section__head reveal">
          <span className="chip">
            <span className="chip__dot" /> How it works
          </span>
          <h2>
            Three steps to a<br />
            <span className="text-lime">stronger routine.</span>
          </h2>
        </div>

        <div className="steps__grid">
          {steps.map((s, i) => (
            <article className="step-card reveal" style={{ transitionDelay: `${i * 90}ms` }} key={s.n}>
              <span className="step-card__number">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
