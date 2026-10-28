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

// Panna Młoda w klasycznej białej sukni z koronką i złotymi dodatkami – nagłówek motywu „klasyczna biel”.
export function BrideIllustration() {
  const skin = '#f3dccb'
  const hair = '#7a5640'
  const hem = Array.from({ length: 15 }, (_, i) => 76 + i * 12)
  return (
    // kadr przycięty do łuku – Panna Młoda wypełnia ilustrację
    <svg viewBox="52 4 216 252" role="img" aria-label="Ilustracja Panny Młodej – miejsce na zdjęcie">
      <defs>
        <linearGradient id="bride-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--gold-deep)" />
          <stop offset="0.5" stopColor="var(--gold-light)" />
          <stop offset="1" stopColor="var(--gold)" />
        </linearGradient>
      </defs>

      {/* złoty łuk w tle */}
      <path d="M62 252 V112 A98 98 0 0 1 258 112 V252" fill="var(--mint)" opacity="0.6" />
      <path d="M62 252 V112 A98 98 0 0 1 258 112 V252" fill="none" stroke="url(#bride-gold)" strokeWidth="2" />
      <path d="M72 252 V114 A88 88 0 0 1 248 114 V252" fill="none" stroke="var(--gold)" strokeWidth="0.8" strokeDasharray="1 5" />
      {[
        [88, 70],
        [236, 64],
        [250, 150],
        [74, 160],
      ].map(([x, y]) => (
        <path
          key={x}
          d={`M${x} ${y - 6} C ${x + 0.6} ${y - 1}, ${x + 1} ${y - 0.6}, ${x + 6} ${y} C ${x + 1} ${y + 0.6}, ${x + 0.6} ${y + 1}, ${x} ${y + 6} C ${x - 0.6} ${y + 1}, ${x - 1} ${y + 0.6}, ${x - 6} ${y} C ${x - 1} ${y - 0.6}, ${x - 0.6} ${y - 1}, ${x} ${y - 6} Z`}
          fill="var(--gold)"
        />
      ))}

      {/* welon */}
      <path
        d="M150 42 C 110 70, 84 160, 66 248 L 254 248 C 236 160, 210 70, 170 42 Z"
        fill="var(--paper)"
        opacity="0.75"
        stroke="var(--lace-line)"
        strokeWidth="1"
      />
      <path d="M146 52 C 112 84, 92 170, 78 244" fill="none" stroke="var(--lace-line)" strokeWidth="1.4" strokeDasharray="1 4" strokeLinecap="round" />
      <path d="M174 52 C 208 84, 228 170, 242 244" fill="none" stroke="var(--lace-line)" strokeWidth="1.4" strokeDasharray="1 4" strokeLinecap="round" />

      {/* spódnica sukni z koronkowym dołem */}
      <path d="M128 132 C 110 172, 84 214, 72 246 H 248 C 236 214, 210 172, 192 132 Z" fill="var(--paper)" stroke="var(--lace-line)" strokeWidth="1.2" />
      {[
        'M146 138 C 136 180, 118 214, 108 244',
        'M160 138 V 244',
        'M174 138 C 184 180, 202 214, 212 244',
      ].map((d) => (
        <path key={d} d={d} fill="none" stroke="var(--lace-line)" strokeWidth="0.9" opacity="0.8" />
      ))}
      {[
        [116, 222],
        [140, 200],
        [182, 204],
        [204, 226],
        [160, 222],
        [128, 178],
        [192, 176],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`} fill="none" stroke="var(--lace-line)" strokeWidth="0.9">
          <circle cx={x} cy={y} r="5" />
          <circle cx={x} cy={y} r="1.6" fill="var(--lace-line)" />
        </g>
      ))}
      <g fill="var(--paper)" stroke="var(--lace-line)" strokeWidth="1">
        {hem.map((x) => (
          <circle key={x} cx={x} cy="247" r="6" />
        ))}
      </g>
      <rect x="70" y="238" width="180" height="9" fill="var(--paper)" />
      <path d="M72 238 H 248" stroke="var(--gold)" strokeWidth="1" strokeDasharray="2 4" />

      {/* gorset z dekoltem w serce */}
      <path
        d="M138 92 C 136 108, 134 122, 130 134 H 190 C 186 122, 184 108, 182 92 C 174 99, 166 101, 160 95 C 154 101, 146 99, 138 92 Z"
        fill="var(--paper)"
        stroke="var(--lace-line)"
        strokeWidth="1.2"
      />
      <path d="M146 104 L 160 128 L 174 104" fill="none" stroke="var(--lace-line)" strokeWidth="0.9" />
      <rect x="129" y="128" width="62" height="7" rx="3.5" fill="url(#bride-gold)" />
      <circle cx="160" cy="131.5" r="4.5" fill="var(--paper)" stroke="var(--gold-deep)" strokeWidth="1.2" />

      {/* szyja i ramiona */}
      <rect x="154" y="76" width="12" height="20" fill={skin} />
      <path d="M138 96 C 126 112, 128 138, 150 150" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />
      <path d="M182 96 C 194 112, 192 138, 170 150" fill="none" stroke={skin} strokeWidth="8" strokeLinecap="round" />

      {/* bukiet białych róż */}
      <g transform="translate(160 152)">
        <path d="M-4 6 L -10 34 M 4 6 L 10 34" stroke="url(#bride-gold)" strokeWidth="2.4" strokeLinecap="round" />
        {[
          [-22, 2, -60],
          [22, 2, 60],
          [-16, -12, -30],
          [16, -12, 30],
        ].map(([x, y, a]) => (
          <path key={a} d="M0 0 C 5 -6, 5 -16, 0 -22 C -5 -16, -5 -6, 0 0 Z" fill="var(--sage)" transform={`translate(${x} ${y}) rotate(${a})`} />
        ))}
        {[
          [-11, 0, 9],
          [11, 0, 9],
          [0, -9, 10],
          [0, 7, 8],
        ].map(([x, y, r]) => (
          <g key={`${x}${y}`}>
            <circle cx={x} cy={y} r={r} fill="var(--paper)" stroke="var(--lace-line)" strokeWidth="1" />
            <path d={`M${x - r * 0.35} ${y} a ${r * 0.35} ${r * 0.35} 0 1 1 ${r * 0.5} ${r * 0.2}`} fill="none" stroke="var(--gold)" strokeWidth="1" />
          </g>
        ))}
        {[
          [-20, -10],
          [20, -10],
          [-6, -20],
          [8, -20],
        ].map(([x, y]) => (
          <circle key={`${x}${y}`} cx={x} cy={y} r="2" fill="var(--gold-light)" />
        ))}
      </g>

      {/* głowa: upięte włosy, diadem, kolczyki */}
      <circle cx="160" cy="36" r="10" fill={hair} />
      <circle cx="160" cy="62" r="19" fill={skin} />
      <path d="M140 64 C 136 38, 184 38, 180 64 C 176 50, 168 46, 160 48 C 152 46, 144 50, 140 64 Z" fill={hair} />
      <path d="M146 44 L 150 36 L 155 42 L 160 32 L 165 42 L 170 36 L 174 44" fill="none" stroke="url(#bride-gold)" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="160" cy="32" r="2.2" fill="var(--paper)" stroke="var(--gold)" />
      <circle cx="141" cy="70" r="2" fill="var(--gold)" />
      <circle cx="179" cy="70" r="2" fill="var(--gold)" />
      <path d="M150 62 q 4 3 8 0 M162 62 q 4 3 8 0" fill="none" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="149" cy="69" r="3" fill="var(--rose)" opacity="0.5" />
      <circle cx="171" cy="69" r="3" fill="var(--rose)" opacity="0.5" />
      <path d="M155 72 Q 160 76 165 72" fill="none" stroke="var(--rose-deep)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

const illustrations = {
  bride: BrideIllustration,
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
