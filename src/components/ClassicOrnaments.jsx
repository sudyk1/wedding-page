// Dekoracje motywu „klasyczna biel” – białe róże, złote obrączki, złote ornamenty i koronka.
import { LaceRosette } from './LaceOrnaments.jsx'

const range = (n) => Array.from({ length: n }, (_, i) => i)

// Wspólny złoty gradient – każdy SVG definiuje go pod własnym id, bo id musi być unikalne w dokumencie.
function GoldGradient({ id }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="var(--gold-deep)" />
        <stop offset="0.45" stopColor="var(--gold-light)" />
        <stop offset="1" stopColor="var(--gold)" />
      </linearGradient>
    </defs>
  )
}

// Biała róża: płatki z delikatnym złotawym konturem i spiralą w środku.
function Rose({ x = 0, y = 0, r = 14 }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill="var(--paper)" stroke="var(--lace-line)" strokeWidth="1" />
      {[0, 72, 144, 216, 288].map((a) => (
        <path
          key={a}
          d={`M0 ${-r * 0.2} C ${r * 0.55} ${-r * 0.5}, ${r * 0.6} ${-r * 0.95}, 0 ${-r * 0.98}`}
          fill="none"
          stroke="var(--lace-line)"
          strokeWidth="0.9"
          transform={`rotate(${a})`}
        />
      ))}
      <circle r={r * 0.5} fill="none" stroke="var(--lace-line)" strokeWidth="0.9" />
      <circle r={r * 0.2} fill="var(--gold-light)" stroke="var(--gold)" strokeWidth="0.8" />
    </g>
  )
}

function GoldLeaf({ x, y, rotate, gid }) {
  return (
    <path
      d="M0 0 C 6 -8, 6 -20, 0 -28 C -6 -20, -6 -8, 0 0 Z"
      fill={`url(#${gid})`}
      transform={`translate(${x} ${y}) rotate(${rotate})`}
    />
  )
}

// Bukiet ślubny z białych róż, złotych listków i gipsówki.
export function RoseBouquet({ className = '' }) {
  const gid = 'gold-bouquet'
  return (
    <div className={`bouquet ${className}`} aria-hidden="true">
      <svg width="180" height="96" viewBox="-90 -60 180 96">
        <GoldGradient id={gid} />
        {[-62, -40, 40, 62].map((x, i) => (
          <GoldLeaf key={x} x={x * 0.7} y={4} rotate={x < 0 ? -70 + i * 12 : 70 - (i - 2) * 12} gid={gid} />
        ))}
        <GoldLeaf x={-20} y={-14} rotate={-30} gid={gid} />
        <GoldLeaf x={20} y={-14} rotate={30} gid={gid} />
        {[
          [-44, -2],
          [44, -2],
          [-28, -36],
          [30, -38],
          [0, -48],
        ].map(([x, y]) => (
          <g key={`${x}${y}`} fill="var(--gold-light)">
            <circle cx={x} cy={y} r="2.4" />
            <circle cx={x + 5} cy={y - 4} r="1.6" />
            <circle cx={x - 4} cy={y - 5} r="1.4" />
          </g>
        ))}
        <Rose x={-26} y={-6} r={15} />
        <Rose x={26} y={-6} r={15} />
        <Rose x={0} y={-20} r={18} />
        <Rose x={-10} y={10} r={12} />
        <Rose x={12} y={10} r={12} />
        <path d="M-6 22 C -16 30, -24 28, -26 34 M6 22 C 16 30, 24 28, 26 34" stroke={`url(#${gid})`} strokeWidth="2" fill="none" />
      </svg>
    </div>
  )
}

// Dwie splecione obrączki z brylancikiem – znaczek przy nagłówkach kart.
export function GoldRings({ size = 40 }) {
  const gid = `gold-rings-${size}`
  return (
    <svg width={size} height={size} viewBox="-30 -30 60 60" aria-hidden="true">
      <GoldGradient id={gid} />
      <circle cx="-8" cy="4" r="14" fill="none" stroke={`url(#${gid})`} strokeWidth="4" />
      <circle cx="8" cy="4" r="14" fill="none" stroke={`url(#${gid})`} strokeWidth="4" />
      <path d="M8 -14 l 4 -6 h -8 Z" fill="var(--paper)" stroke="var(--gold)" strokeWidth="1.2" />
      <path d="M4 -20 l 4 -5 l 4 5" fill="var(--paper)" stroke="var(--gold)" strokeWidth="1.2" />
    </svg>
  )
}

// Cienka złota linia z ornamentem i obrączkami pośrodku.
export function GoldDivider() {
  const gid = 'gold-divider'
  return (
    <div className="folk-divider gold-divider" aria-hidden="true">
      <svg viewBox="0 0 600 50" preserveAspectRatio="xMidYMid meet">
        <GoldGradient id={gid} />
        <path d="M40 25 C 120 25, 200 22, 250 25" stroke={`url(#${gid})`} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M560 25 C 480 25, 400 22, 350 25" stroke={`url(#${gid})`} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        {/* zawijasy przy obrączkach */}
        <path d="M250 25 C 262 12, 276 14, 272 24 C 270 30, 262 28, 264 22" stroke="var(--gold)" strokeWidth="1.3" fill="none" />
        <path d="M350 25 C 338 12, 324 14, 328 24 C 330 30, 338 28, 336 22" stroke="var(--gold)" strokeWidth="1.3" fill="none" />
        {/* romby na końcach */}
        {[34, 566].map((x) => (
          <path key={x} d={`M${x} 19 l 6 6 l -6 6 l -6 -6 Z`} fill="var(--gold)" />
        ))}
        {[110, 180, 420, 490].map((x) => (
          <circle key={x} cx={x} cy="25" r="2" fill="var(--gold-light)" stroke="var(--gold)" strokeWidth="0.8" />
        ))}
        <g transform="translate(300 25)">
          <circle cx="-8" cy="2" r="12" fill="none" stroke={`url(#${gid})`} strokeWidth="3" />
          <circle cx="8" cy="2" r="12" fill="none" stroke={`url(#${gid})`} strokeWidth="3" />
        </g>
      </svg>
    </div>
  )
}

function Sparkle({ size = 18, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="-10 -10 20 20" aria-hidden="true">
      <path d="M0 -10 C 1 -2, 2 -1, 10 0 C 2 1, 1 2, 0 10 C -1 2, -2 1, -10 0 C -2 -1, -1 -2, 0 -10 Z" fill="var(--gold)" />
    </svg>
  )
}

// Tło nagłówka: koronkowe serwetki i złote iskry.
export function FloatingClassic() {
  return (
    <div className="floating-flowers" aria-hidden="true">
      <LaceRosette size={170} className="ff ff--1" />
      <LaceRosette size={120} className="ff ff--4" />
      {range(6).map((i) => (
        <Sparkle key={i} size={10 + (i % 3) * 6} className={`ff sparkle sparkle--${i + 1}`} />
      ))}
    </div>
  )
}
