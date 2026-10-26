import { couple, wedding } from './config.js'
import Hero from './components/Hero.jsx'
import Venues from './components/Venues.jsx'
import Bus from './components/Bus.jsx'
import Rsvp from './components/Rsvp.jsx'
import { Bouquet, FolkDivider } from './components/Ornaments.jsx'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <FolkDivider />
        <Venues />
        <FolkDivider />
        <Bus />
        <FolkDivider />
        <Rsvp />
      </main>
      <footer className="footer">
        <Bouquet />
        <p className="footer__names">
          {couple.bride} &amp; {couple.groom}
        </p>
        <p className="footer__date">{wedding.date}</p>
        <p className="footer__thanks">Do zobaczenia!</p>
      </footer>
    </>
  )
}
