// Dekoracje w stylu polskich wycinanek – pastelowe kwiaty, liście i bordiury.

const range = (n) => Array.from({ length: n }, (_, i) => i)

export function FolkFlower({
  size = 80,
  petals = 8,
  outer = 'var(--rose)',
  inner = 'var(--butter)',
  center = 'var(--sage)',
  className = '',
}) {
  const step = 360 / petals
  return (
    <svg className={className} width={size} height={size} viewBox="-50 -50 100 100" aria-hidden="true">
      <g fill={outer}>
        {range(petals).map((i) => (
          <path
            key={i}
            d="M0 -6 C 14 -18, 12 -38, 0 -46 C -12 -38, -14 -18, 0 -6 Z"
            transform={`rotate(${i * step})`}
          />
        ))}
      </g>
      <g fill={inner}>
        {range(petals).map((i) => (
          <path
            key={i}
            d="M0 -6 C 7 -14, 6 -24, 0 -30 C -6 -24, -7 -14, 0 -6 Z"
            transform={`rotate(${i * step + step / 2})`}
          />
        ))}
      </g>
      <g fill="#fff" opacity="0.85">
        {range(petals).map((i) => (
          <circle key={i} cx="0" cy="-36" r="2.4" transform={`rotate(${i * step})`} />
        ))}
      </g>
      <circle r="12" fill={center} />
      <circle r="6" fill={inner} />
      <g fill="#fff">
        {range(6).map((i) => (
          <circle key={i} cx="0" cy="-9" r="1.4" transform={`rotate(${i * 60})`} />
        ))}
      </g>
    </svg>
  )
}

export function Leaf({ size = 40, color = 'var(--sage)', rotate = 0, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 2}
      viewBox="-20 -40 40 80"
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path d="M0 38 C 18 18, 18 -18, 0 -38 C -18 -18, -18 18, 0 38 Z" fill={color} />
      <path d="M0 34 L0 -32" stroke="#fff" strokeWidth="1.6" opacity="0.7" />
      {[-20, -8, 4, 16].map((y) => (
        <g key={y} stroke="#fff" strokeWidth="1.2" opacity="0.7">
          <path d={`M0 ${y + 6} L 8 ${y}`} />
          <path d={`M0 ${y + 6} L -8 ${y}`} />
        </g>
      ))}
    </svg>
  )
}

// Bukiet: duży kwiat w środku, mniejsze po bokach, liście.
export function Bouquet({ className = '' }) {
  return (
    <div className={`bouquet ${className}`} aria-hidden="true">
      <Leaf size={26} rotate={-55} className="bouquet__leaf bouquet__leaf--l" />
      <FolkFlower size={54} petals={6} outer="var(--lavender)" inner="var(--sky)" center="var(--rose)" />
      <FolkFlower size={84} petals={8} />
      <FolkFlower size={54} petals={6} outer="var(--mint)" inner="var(--butter)" center="var(--lavender)" />
      <Leaf size={26} rotate={55} className="bouquet__leaf bouquet__leaf--r" />
    </div>
  )
}

// Pozioma bordiura – powtarzający się wzór wycinankowy.
export function FolkDivider() {
  const colors = ['var(--rose)', 'var(--mint)', 'var(--lavender)', 'var(--butter)', 'var(--sky)']
  return (
    <div className="folk-divider" aria-hidden="true">
      <svg viewBox="0 0 600 40" preserveAspectRatio="xMidYMid meet">
        <path d="M0 20 H600" stroke="var(--sage)" strokeWidth="1.5" strokeDasharray="2 6" />
        {range(11).map((i) => {
          const x = 30 + i * 54
          const c = colors[i % colors.length]
          return (
            <g key={i} transform={`translate(${x} 20)`}>
              {i % 2 === 0 ? (
                <>
                  {range(6).map((p) => (
                    <ellipse key={p} rx="4" ry="9" cy="-8" fill={c} transform={`rotate(${p * 60})`} />
                  ))}
                  <circle r="4" fill="var(--butter)" />
                </>
              ) : (
                <>
                  <path d="M-14 0 C -8 -10, 8 -10, 14 0 C 8 10, -8 10, -14 0 Z" fill="var(--sage)" opacity="0.8" />
                  <circle r="3" fill={c} />
                </>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}

// Rozrzucone kwiaty w tle sekcji.
export function FloatingFlowers() {
  return (
    <div className="floating-flowers" aria-hidden="true">
      <FolkFlower size={120} className="ff ff--1" />
      <FolkFlower size={90} petals={6} outer="var(--mint)" inner="var(--sky)" center="var(--rose)" className="ff ff--2" />
      <FolkFlower size={70} petals={10} outer="var(--lavender)" inner="var(--butter)" className="ff ff--3" />
      <FolkFlower size={100} petals={7} outer="var(--sky)" inner="var(--rose)" center="var(--butter)" className="ff ff--4" />
    </div>
  )
}
