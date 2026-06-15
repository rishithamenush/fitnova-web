import { useState } from 'react'

const programs = [
  {
    day: 'Day 01',
    title: 'Chest & Triceps',
    meta: '6 exercises · 18 sets · ~60 min',
    men: '/images/chest-triceps.png',
    women: '/images/chest-triceps-women.png',
  },
  {
    day: 'Day 02',
    title: 'Shoulders & Back',
    meta: '6 exercises · 18 sets · ~60 min',
    men: '/images/shoulders-back.png',
    women: '/images/shoulders-back-women.png',
  },
  {
    day: 'Day 03',
    title: 'Legs & Biceps',
    meta: '6 exercises · 18 sets · ~60 min',
    men: '/images/legs-biceps.png',
    women: '/images/legs-biceps-women.png',
  },
]

export default function Programs() {
  const [gender, setGender] = useState('men')

  return (
    <section className="section" id="programs">
      <div className="container">
        <div className="section__head reveal">
          <span className="chip">
            <span className="chip__dot" /> Training programs
          </span>
          <h2>
            A proven 3 day split,
            <br />
            <span className="text-lime">tailored to you.</span>
          </h2>
          <p>
            The same plan adapts to your profile - switch below to see how
            FitNova personalizes every workout.
          </p>

          <div className="toggle reveal" role="tablist" aria-label="Choose profile">
            <button
              role="tab"
              aria-selected={gender === 'men'}
              className={gender === 'men' ? 'is-active' : ''}
              onClick={() => setGender('men')}
            >
              Men
            </button>
            <button
              role="tab"
              aria-selected={gender === 'women'}
              className={gender === 'women' ? 'is-active' : ''}
              onClick={() => setGender('women')}
            >
              Women
            </button>
          </div>
        </div>

        <div className="programs__grid">
          {programs.map((p, i) => (
            <article className="program-card reveal" style={{ transitionDelay: `${i * 80}ms` }} key={p.title}>
              <div className="program-card__media">
                <img src={gender === 'women' ? p.women : p.men} alt={`${p.title} workout`} />
                <span className="program-card__day">{p.day}</span>
              </div>
              <div className="program-card__body">
                <h3>{p.title}</h3>
                <p>{p.meta}</p>
                <a href="#download" className="program-card__link">
                  Start in the app
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
