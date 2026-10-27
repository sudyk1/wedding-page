// Dekoracje motywu „koronka i lawenda” – koronkowe rozety, gałązki lawendy, ażurowe bordiury.

const range = (n) => Array.from({ length: n }, (_, i) => i)

// Koronkowa serwetka: ażurowe ząbki, płatki z oczkami, lawendowy środek.
export function LaceRosette({ size = 80, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="-50 -50 100 100" aria-hidden="true">
      <g fill="var(--paper)" stroke="var(--lace-line)" strokeWidth="0.9">
        {range(18).map((i) => (
          <circle key={i} cx="0" cy="-41" r="7" transform={`rotate(${i * 20})`} />
        ))}
        <circle r="38" />
      </g>
      <g fill="var(--lace-hole)">
        {range(18).map((i) => (
          <circle key={i} cx="0" cy="-42" r="2.2" transform={`rotate(${i * 20})`} />
        ))}
      </g>
      <circle r="31" fill="none" stroke="var(--lace-line)" strokeWidth="0.8" strokeDasharray="1.5 3" />
      {/* płatki w bladej lawendzie – rozeta jest czytelna także w małym rozmiarze na białej karcie */}
      <g fill="var(--sky)" stroke="var(--lavender)" strokeWidth="1.2">
        {range(8).map((i) => (
          <ellipse key={i} rx="7" ry="13" cy="-17" transform={`rotate(${i * 45})`} />
        ))}
      </g>
      <g fill="var(--paper)">
        {range(8).map((i) => (
          <ellipse key={i} rx="2.2" ry="5" cy="-18" transform={`rotate(${i * 45})`} />
        ))}
      </g>
      <circle r="8" fill="var(--lavender)" />
      <circle r="3.5" fill="var(--butter)" />
      <g fill="var(--paper)">
        {range(6).map((i) => (
          <circle key={i} cx="0" cy="-6" r="1.2" transform={`rotate(${i * 60})`} />
        ))}
      </g>
    </svg>
  )
}

// Gałązka lawendy rysowana od punktu (0,0) w górę na długość `length`.
function Sprig({ length = 90 }) {
  const buds = range(9)
  return (
    <g>
      <path d={`M0 0 Q 2 ${-length / 2} 0 ${-length}`} stroke="var(--sage)" strokeWidth="1.6" fill="none" />
      <path d="M0 -6 C 8 -14, 10 -26, 4 -32 C 2 -22, 0 -14, 0 -6 Z" fill="var(--sage)" opacity="0.8" />
      <path d="M0 -10 C -8 -18, -10 -28, -5 -34 C -2 -24, 0 -18, 0 -10 Z" fill="var(--sage)" opacity="0.7" />
      {buds.map((i) => {
        const y = -length + 4 + i * 5.5
        const spread = 2.2 + i * 0.25
        const color = i % 2 ? 'var(--lavender)' : 'var(--lavender-deep)'
        return (
          <g key={i}>
            <ellipse cx={-spread} cy={y} rx="2.4" ry="4" fill={color} transform={`rotate(-25 ${-spread} ${y})`} />
            <ellipse cx={spread} cy={y} rx="2.4" ry="4" fill={color} transform={`rotate(25 ${spread} ${y})`} />
          </g>
        )
      })}
      <ellipse cx="0" cy={-length - 1} rx="2" ry="3.4" fill="var(--lavender-deep)" />
    </g>
  )
}

export function LavenderSprig({ size = 120, rotate = 0, className = '' }) {
  return (
    <svg
      className={className}
      width={size / 4}
      height={size}
      viewBox="-15 -100 30 102"
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <Sprig length={92} />
    </svg>
  )
}

// Bukiet: wachlarz gałązek lawendy związany wstążką, z koronkową rozetą.
export function LaceBouquet({ className = '' }) {
  return (
    <div className={`bouquet ${className}`} aria-hidden="true">
      <svg width="170" height="112" viewBox="-85 -104 170 112">
        {[-48, -26, -10, 10, 26, 48].map((a, i) => (
          <g key={a} transform={`translate(0 4) rotate(${a})`}>
            <Sprig length={i === 2 || i === 3 ? 92 : 78} />
          </g>
        ))}
        <path d="M-4 0 C -20 -10, -26 4, -10 6 Z M4 0 C 20 -10, 26 4, 10 6 Z" fill="var(--rose)" />
        <path d="M-3 4 L -12 18 M 3 4 L 12 18" stroke="var(--rose)" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="0" cy="2" r="4" fill="var(--rose-deep)" />
      </svg>
    </div>
  )
}

// Pozioma bordiura: koronkowe ząbki z oczkami, rozeta i gałązki lawendy pośrodku.
export function LaceDivider() {
  const scallops = range(26)
  return (
    <div className="folk-divider lace-divider" aria-hidden="true">
      <svg viewBox="0 0 600 60" preserveAspectRatio="xMidYMid meet">
        <g fill="var(--paper)" stroke="var(--lace-line)" strokeWidth="0.9">
          {scallops.map((i) => (
            <circle key={i} cx={40 + i * 20.8} cy="30" r="9" />
          ))}
        </g>
        <rect x="30" y="22" width="540" height="8" fill="var(--paper)" />
        <path d="M30 22 H570" stroke="var(--lace-line)" strokeWidth="0.9" />
        <g fill="var(--lace-hole)">
          {scallops.map((i) => (
            <circle key={i} cx={40 + i * 20.8} cy="33" r="2" />
          ))}
        </g>
        {/* zaokrąglone zakończenia pasa koronki: oczko z lawendowym środkiem i kropla */}
        {[27, 573].map((x) => (
          <g key={x} transform={`translate(${x} 26)`}>
            <circle r="9" fill="var(--paper)" stroke="var(--lace-line)" strokeWidth="0.9" />
            <circle r="3.6" fill="var(--lavender)" />
            <circle cx={x < 300 ? -14 : 14} r="2.6" fill="var(--lavender-deep)" opacity="0.8" />
            <circle cx={x < 300 ? -21 : 21} r="1.6" fill="var(--lavender)" opacity="0.8" />
          </g>
        ))}
        <g transform="translate(250 30) rotate(-90)">
          <Sprig length={64} />
        </g>
        <g transform="translate(350 30) rotate(90)">
          <Sprig length={64} />
        </g>
        <g transform="translate(300 30) scale(0.36)">
          <circle r="50" fill="var(--cream)" />
        </g>
      </svg>
      <LaceRosette size={46} className="lace-divider__rosette" />
    </div>
  )
}

// Duże, półprzezroczyste koronkowe serwetki i lawenda w tle nagłówka.
export function FloatingLace() {
  return (
    <div className="floating-flowers" aria-hidden="true">
      <LaceRosette size={170} className="ff ff--1" />
      <LavenderSprig size={150} rotate={25} className="ff ff--2" />
      <LavenderSprig size={120} rotate={-20} className="ff ff--3" />
      <LaceRosette size={130} className="ff ff--4" />
    </div>
  )
}
