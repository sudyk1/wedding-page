import { useEffect, useState } from 'react'
import { venues } from '../config.js'
import { directionsUrl, isMobileDevice, mapEmbedUrl } from '../maps.js'
import { Picture } from './Illustrations.jsx'
import { Emblem } from './Ornaments.jsx'

function VenueCard({ venue, mobile }) {
  const query = `${venue.name}, ${venue.address}`
  return (
    <article className="venue" id={venue.id}>
      <div className="venue__badge">
        <Emblem size={34} petals={6} />
        <span>{venue.label}</span>
      </div>
      <Picture photo={venue.photo} kind={venue.illustration} alt={venue.name} className="venue__picture" />
      <div className="venue__body">
        <p className="venue__time">{venue.time}</p>
        <h3 className="venue__name">{venue.name}</h3>
        <p className="venue__address">{venue.address}</p>
        <p className="venue__desc">{venue.description}</p>
      </div>
      <div className="venue__map">
        <iframe
          title={`Mapa – ${venue.name}`}
          src={mapEmbedUrl(venue.coords ?? query)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a className="btn" href={directionsUrl(query, mobile)} target="_blank" rel="noopener noreferrer">
        {mobile ? 'Prowadź z mojej lokalizacji' : 'Wyznacz trasę w Google Maps'}
      </a>
    </article>
  )
}

export default function Venues() {
  // Wykrywanie po stronie klienta – na telefonie link uruchamia nawigację z bieżącej lokalizacji.
  const [mobile, setMobile] = useState(false)
  useEffect(() => setMobile(isMobileDevice()), [])

  return (
    <section className="section" id="miejsca">
      <h2 className="section__title">Gdzie i kiedy</h2>
      <p className="section__subtitle">Najpierw Kościół, potem wspólne świętowanie</p>
      <div className="venues">
        {venues.map((venue) => (
          <VenueCard key={venue.id} venue={venue} mobile={mobile} />
        ))}
      </div>
    </section>
  )
}
