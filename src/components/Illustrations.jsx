// Placeholdery ilustracji: Para Młoda, kościół, sala weselna.
// Gdy w config.js zostanie podane zdjęcie (`photo`), komponent <Picture> wyświetli je zamiast ilustracji.

function CrownFlower({ x, y, color }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} rx="3.2" ry="6" cy="-4.5" fill={color} transform={`rotate(${r})`} />
      ))}
      <circle r="2.6" fill="var(--butter)" />
    </g>
  )
}

export function CoupleIllustration() {
  return (
    <svg viewBox="0 0 320 260" role="img" aria-label="Ilustracja Pary Młodej – miejsce na zdjęcie">
      <ellipse cx="160" cy="244" rx="130" ry="10" fill="var(--sage)" opacity="0.25" />

      {/* Panna Młoda */}
      <g>
        <path d="M70 120 C 40 160, 30 220, 28 244 H 180 C 176 220, 166 160, 140 120 Z" fill="#fff" stroke="var(--rose)" strokeWidth="2" />
        {/* welon */}
        <path d="M80 66 C 50 100, 44 170, 40 230 L 60 232 C 66 170, 76 110, 96 80 Z" fill="var(--sky)" opacity="0.35" />
        {/* gorset z haftem */}
        <path d="M84 108 H 126 L 132 150 H 78 Z" fill="var(--rose)" opacity="0.55" />
        {[90, 100, 110, 120].map((x) => (
          <circle key={x} cx={x} cy="128" r="3" fill="#fff" />
        ))}
        {/* zdobienia sukni */}
        {[60, 90, 120, 150].map((x, i) => (
          <CrownFlower key={x} x={x} y={222 - (i % 2) * 14} color={i % 2 ? 'var(--lavender)' : 'var(--rose)'} />
        ))}
        <rect x="98" y="92" width="14" height="18" fill="#f6dccb" />
        <circle cx="105" cy="74" r="22" fill="#f6dccb" />
        <path d="M83 72 C 84 46, 126 46, 127 72 C 120 60, 90 60, 83 72 Z" fill="#c9a27e" />
        {/* wianek */}
        {[84, 94, 105, 116, 126].map((x, i) => (
          <CrownFlower
            key={x}
            x={x}
            y={56 + Math.abs(2 - i) * 3}
            color={['var(--rose)', 'var(--lavender)', 'var(--butter)', 'var(--mint)', 'var(--rose)'][i]}
          />
        ))}
        <circle cx="97" cy="76" r="1.8" fill="var(--ink)" />
        <circle cx="113" cy="76" r="1.8" fill="var(--ink)" />
        <path d="M99 85 Q 105 89 111 85" stroke="var(--rose-deep)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {/* bukiet */}
        <g transform="translate(132 160)">
          <path d="M0 0 L -6 26 M0 0 L 6 26" stroke="var(--sage)" strokeWidth="3" />
          <CrownFlower x={-8} y={-2} color="var(--rose)" />
          <CrownFlower x={8} y={-2} color="var(--lavender)" />
          <CrownFlower x={0} y={-12} color="var(--butter)" />
        </g>
      </g>

      {/* Pan Młody */}
      <g>
        <rect x="200" y="186" width="20" height="58" fill="var(--ink)" opacity="0.85" />
        <rect x="226" y="186" width="20" height="58" fill="var(--ink)" opacity="0.85" />
        <path d="M194 106 H 252 L 258 196 H 188 Z" fill="#fff" stroke="var(--sky-deep)" strokeWidth="2" />
        {/* kamizelka ludowa */}
        <path d="M196 108 L 214 108 L 220 196 L 190 196 Z" fill="var(--sky-deep)" opacity="0.8" />
        <path d="M250 108 L 232 108 L 226 196 L 256 196 Z" fill="var(--sky-deep)" opacity="0.8" />
        {[124, 144, 164, 184].map((y) => (
          <g key={y}>
            <circle cx="205" cy={y} r="3" fill="var(--butter)" />
            <circle cx="241" cy={y} r="3" fill="var(--butter)" />
          </g>
        ))}
        <path d="M216 108 L 223 120 L 230 108" fill="var(--rose)" />
        <rect x="216" y="88" width="14" height="20" fill="#f6dccb" />
        <circle cx="223" cy="70" r="22" fill="#f6dccb" />
        <path d="M201 66 C 202 42, 244 42, 245 66 C 238 54, 210 52, 201 66 Z" fill="#7a5a44" />
        <circle cx="215" cy="72" r="1.8" fill="var(--ink)" />
        <circle cx="231" cy="72" r="1.8" fill="var(--ink)" />
        <path d="M217 81 Q 223 85 229 81" stroke="var(--rose-deep)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {/* butonierka */}
        <CrownFlower x={244} y={122} color="var(--rose)" />
      </g>

      {/* serce */}
      <path
        d="M160 40 C 160 30, 146 28, 146 40 C 146 50, 160 56, 160 62 C 160 56, 174 50, 174 40 C 174 28, 160 30, 160 40 Z"
        fill="var(--rose)"
      />
    </svg>
  )
}

export function ChurchIllustration() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="Ilustracja kościoła – miejsce na zdjęcie">
      <rect width="320" height="220" fill="var(--sky)" opacity="0.35" />
      <circle cx="262" cy="46" r="20" fill="var(--butter)" opacity="0.9" />
      <path d="M0 196 C 80 180, 240 180, 320 196 V 220 H 0 Z" fill="var(--mint)" />
      {/* nawa */}
      <rect x="120" y="100" width="150" height="96" fill="#fff" stroke="var(--ink-soft)" strokeWidth="1.5" />
      <path d="M112 102 L 195 58 L 278 102 Z" fill="var(--rose)" opacity="0.75" />
      {/* wieża */}
      <rect x="60" y="76" width="64" height="120" fill="#fff" stroke="var(--ink-soft)" strokeWidth="1.5" />
      <path d="M56 78 L 92 30 L 128 78 Z" fill="var(--rose-deep)" opacity="0.7" />
      <path d="M92 30 V 6 M 84 14 H 100" stroke="var(--butter-deep)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="92" cy="100" r="9" fill="var(--sky)" stroke="var(--ink-soft)" />
      {/* drzwi i okna */}
      <path d="M80 196 V 160 C 80 146, 104 146, 104 160 V 196 Z" fill="var(--lavender)" />
      {[148, 196, 244].map((x) => (
        <path key={x} d={`M${x - 8} 160 V 132 C ${x - 8} 122, ${x + 8} 122, ${x + 8} 132 V 160 Z`} fill="var(--sky)" stroke="var(--ink-soft)" />
      ))}
      {/* kwiaty na trawie */}
      {[20, 40, 290, 305].map((x, i) => (
        <g key={x} transform={`translate(${x} ${200 - (i % 2) * 6})`}>
          {[0, 72, 144, 216, 288].map((r) => (
            <ellipse key={r} rx="3" ry="5" cy="-4" fill={i % 2 ? 'var(--rose)' : 'var(--lavender)'} transform={`rotate(${r})`} />
          ))}
          <circle r="2" fill="var(--butter)" />
        </g>
      ))}
    </svg>
  )
}

export function HallIllustration() {
  return (
    <svg viewBox="0 0 320 220" role="img" aria-label="Ilustracja sali weselnej – miejsce na zdjęcie">
      <rect width="320" height="220" fill="var(--lavender)" opacity="0.3" />
      {[40, 90, 230, 280].map((x, i) => (
        <circle key={x} cx={x} cy={30 + (i % 2) * 14} r="2" fill="var(--butter-deep)" />
      ))}
      <path d="M0 196 C 80 184, 240 184, 320 196 V 220 H 0 Z" fill="var(--mint)" />
      {/* dwór */}
      <rect x="50" y="110" width="220" height="86" fill="#fff" stroke="var(--ink-soft)" strokeWidth="1.5" />
      <path d="M36 112 L 160 64 L 284 112 Z" fill="var(--sage)" opacity="0.85" />
      {/* portyk z kolumnami */}
      <path d="M118 112 L 160 86 L 202 112 Z" fill="#fff" stroke="var(--ink-soft)" />
      <circle cx="160" cy="102" r="6" fill="var(--rose)" />
      {[124, 146, 174, 196].map((x) => (
        <rect key={x} x={x - 4} y="112" width="8" height="84" fill="#fdf8f2" stroke="var(--ink-soft)" />
      ))}
      <path d="M150 196 V 150 C 150 140, 170 140, 170 150 V 196 Z" fill="var(--rose)" opacity="0.7" />
      {[74, 98, 222, 246].map((x) => (
        <rect key={x} x={x - 9} y="134" width="18" height="26" fill="var(--butter)" stroke="var(--ink-soft)" />
      ))}
      {/* girlanda */}
      <path d="M50 112 Q 85 130 118 112 M 202 112 Q 235 130 270 112" stroke="var(--rose)" strokeWidth="2" fill="none" />
      {[68, 100, 220, 252].map((x) => (
        <circle key={x} cx={x} cy="120" r="3.5" fill="var(--rose)" />
      ))}
    </svg>
  )
}

const illustrations = {
  couple: CoupleIllustration,
  church: ChurchIllustration,
  hall: HallIllustration,
}

export function Picture({ photo, kind, alt, className = '' }) {
  if (photo) {
    return <img className={`picture ${className}`} src={photo} alt={alt} loading="lazy" />
  }
  const Illustration = illustrations[kind]
  return (
    <div className={`picture picture--placeholder ${className}`}>
      <Illustration />
    </div>
  )
}
