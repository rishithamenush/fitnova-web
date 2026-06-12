const reviews = [
  {
    quote:
      'The rolling cycle is genius. I stopped skipping leg day because the app simply will not let me jump to bench instead.',
    name: 'Ravindu M.',
    role: 'Trains 4× a week',
  },
  {
    quote:
      'Finally an app with proper guides for women. The muscle visuals make it so clear what each session is working.',
    name: 'Sasha K.',
    role: 'FitNova member, 8 months',
  },
  {
    quote:
      'Simple, fast, no subscription nonsense. The streak counter alone got me through the winter without missing a week.',
    name: 'Dinuka P.',
    role: '12-week transformation',
  },
]

export default function Testimonials() {
  return (
    <section className="section section--alt" id="reviews">
      <div className="container">
        <div className="section__head reveal">
          <span className="chip">
            <span className="chip__dot" /> Reviews
          </span>
          <h2>
            Athletes <span className="text-lime">love it.</span>
          </h2>
        </div>

        <div className="reviews__grid">
          {reviews.map((r, i) => (
            <figure className="review-card reveal" style={{ transitionDelay: `${i * 80}ms` }} key={r.name}>
              <div className="review-card__stars">★★★★★</div>
              <blockquote>“{r.quote}”</blockquote>
              <figcaption>
                <span className="review-card__avatar">{r.name[0]}</span>
                <div>
                  <strong>{r.name}</strong>
                  <small>{r.role}</small>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
