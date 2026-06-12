const defaults = ['Chest', 'Triceps', 'Shoulders', 'Back', 'Legs', 'Biceps', 'Abs', 'Full Body']

/** Infinite horizontal marquee strip of training words. */
export default function Ticker({ items = defaults, reverse = false }) {
  const row = [...items, ...items, ...items]
  return (
    <div className={`ticker ${reverse ? 'ticker--reverse' : ''}`} aria-hidden="true">
      <div className="ticker__track">
        {row.map((w, i) => (
          <span key={i}>
            {w} <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  )
}
