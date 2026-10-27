import { bus } from '../config.js'
import { Emblem } from './Ornaments.jsx'

function BusIllustration() {
  return (
    <svg className="bus__art" viewBox="0 0 320 130" role="img" aria-label="Ilustracja autokaru">
      <path d="M0 116 H320" stroke="var(--sage)" strokeWidth="2" strokeDasharray="10 8" />
      <rect x="30" y="24" width="250" height="78" rx="18" fill="var(--sky)" />
      <rect x="30" y="72" width="250" height="14" fill="var(--rose)" opacity="0.8" />
      {/* ludowy szlaczek na burcie */}
      {[60, 100, 140, 180, 220, 260].map((x, i) => (
        <g key={x} transform={`translate(${x} 79)`}>
          {[0, 90, 180, 270].map((r) => (
            <ellipse key={r} rx="2.4" ry="4.5" cy="-3" fill={i % 2 ? 'var(--butter)' : '#fff'} transform={`rotate(${r})`} />
          ))}
        </g>
      ))}
      {[50, 98, 146, 194].map((x) => (
        <rect key={x} x={x} y="36" width="38" height="28" rx="6" fill="#fff" opacity="0.9" />
      ))}
      <rect x="242" y="36" width="28" height="46" rx="6" fill="var(--lavender)" />
      <rect x="276" y="44" width="6" height="18" rx="3" fill="var(--butter)" />
      {[80, 230].map((x) => (
        <g key={x}>
          <circle cx={x} cy="104" r="14" fill="var(--ink)" />
          <circle cx={x} cy="104" r="6" fill="var(--paper)" />
        </g>
      ))}
      {/* serce na dachu */}
      <path
        d="M155 16 C 155 9, 145 8, 145 16 C 145 22, 155 26, 155 30 C 155 26, 165 22, 165 16 C 165 8, 155 9, 155 16 Z"
        fill="var(--rose-deep)"
      />
    </svg>
  )
}

function Route({ title, stops, note }) {
  return (
    <div className="route">
      <h3 className="route__title">{title}</h3>
      <ol className="route__stops">
        {stops.map((stop) => (
          <li key={stop.place} className="route__stop">
            <span className="route__dot" aria-hidden="true" />
            <span className="route__place">{stop.place}</span>
            <span className="route__meta">{[stop.time, stop.note].filter(Boolean).join(' · ')}</span>
          </li>
        ))}
      </ol>
      {note && <p className="route__note">{note}</p>}
    </div>
  )
}

export default function Bus() {
  return (
    <section className="section" id="autokar">
      <h2 className="section__title">Autokar dla Gości</h2>
      <p className="section__subtitle">Zadbaliśmy o wygodny dojazd i bezpieczny powrót</p>
      <div className="bus">
        <BusIllustration />
        <p className="bus__lead">
          Dla Gości z okolic Osieka Jasielskiego i Jasła przygotowaliśmy autokar. Wyjedzie z{' '}
          <strong>Osieka Jasielskiego o godzinie 12:00</strong>, zawiezie Was do Kościoła, a po mszy na salę
          weselną. Po zakończeniu zabawy odwiezie wszystkich z powrotem przez Jasło do Osieka Jasielskiego.
        </p>
        <div className="routes">
          <Route title="Przyjazd" stops={bus.outbound} />
          <Route title="Powrót" stops={bus.return} note={bus.returnNote} />
        </div>
        <div className="bus__ask">
          <Emblem size={40} petals={6} outer="var(--sky)" inner="var(--butter)" center="var(--rose)" />
          <p>
            Prosimy, dajcie nam znać przy potwierdzeniu obecności, <strong>czy chcecie skorzystać z autokaru</strong> i
            ile osób z Wami pojedzie – dzięki temu zarezerwujemy odpowiednią liczbę miejsc.
          </p>
        </div>
      </div>
    </section>
  )
}
