const muscles = [
  { img: '/images/muscle-fullbody.png', label: 'Full Body' },
  { img: '/images/muscle-chest.png', label: 'Chest' },
  { img: '/images/muscle-back.png', label: 'Back' },
  { img: '/images/muscle-arms.png', label: 'Arms' },
  { img: '/images/muscle-abs.png', label: 'Abs' },
  { img: '/images/muscle-legs.png', label: 'Legs' },
]

export default function Muscles() {
  const row = [...muscles, ...muscles]
  return (
    <section className="section section--alt muscles" id="muscles">
      <div className="container">
        <div className="section__head section__head--center reveal">
          <span className="chip">
            <span className="chip__dot" /> TARGET MUSCLES
          </span>
          <h2>
            Know exactly <span className="text-lime">what you hit.</span>
          </h2>
          <p>
            Every session highlights the muscles it trains — so every rep has
            a purpose.
          </p>
        </div>
      </div>

      <div className="muscles__marquee reveal" aria-label="Muscle groups">
        <div className="muscles__track">
          {row.map((m, i) => (
            <figure className="muscle-card" key={`${m.label}-${i}`}>
              <img src={m.img} alt={`${m.label} muscles`} loading="lazy" />
              <figcaption>{m.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
