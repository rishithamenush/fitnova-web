import { useEffect, useRef, useState } from 'react'

function CountUp({ to, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)

  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        const t0 = performance.now()
        const duration = 1500
        const tick = (t) => {
          const p = Math.min((t - t0) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(to * eased)
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [to])

  return (
    <strong ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </strong>
  )
}

const stats = [
  { to: 20, suffix: '+', label: 'Guided exercises' },
  { to: 7, suffix: '', label: 'Muscle groups' },
  { to: 10, suffix: 'k+', label: 'Active athletes' },
  { to: 4.9, suffix: '★', decimals: 1, label: 'Average rating' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats__grid reveal">
        {stats.map((s) => (
          <div className="stats__item" key={s.label}>
            <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
