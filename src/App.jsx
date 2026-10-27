import { couple, wedding } from './config.js'
import Hero from './components/Hero.jsx'
import Venues from './components/Venues.jsx'
import Bus from './components/Bus.jsx'
import Rsvp from './components/Rsvp.jsx'
import { Bouquet, Divider } from './components/Ornaments.jsx'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Divider />
        <Venues />
        <Divider />
        <Bus />
        <Divider />
        <Rsvp />
      </main>
      <footer className="footer">
        <Bouquet />
        <p className="footer__names">
          {couple.bride} <span className="footer__amp">&amp;</span> {couple.groom}
        </p>
        <p className="footer__date">{wedding.date}</p>
        <p className="footer__thanks">Do zobaczenia!</p>
      </footer>
    </>
  )
}
