import { couple, wedding } from '../config.js'
import { Bouquet, FloatingFlowers } from './Ornaments.jsx'
import { Picture } from './Illustrations.jsx'
import { useTheme } from '../theme.js'

export default function Hero() {
  // Motyw klasyczny skupia się na Pannie Młodej, pozostałe pokazują Parę Młodą.
  const bride = useTheme() === 'classic'
  return (
    <header className="hero">
      <FloatingFlowers />
      <div className="hero__card">
        <Bouquet />
        <p className="hero__lead">Z radością zapraszamy na</p>
        <h1 className="hero__title">Ślub i Wesele</h1>
        <p className="hero__names">
          <span>{couple.bride}</span>
          <span className="hero__amp">&amp;</span>
          <span>{couple.groom}</span>
        </p>
        <Picture
          photo={couple.photo}
          kind={bride ? 'bride' : 'couple'}
          alt={bride ? 'Panna Młoda' : 'Para Młoda'}
          className="hero__picture"
        />
        <p className="hero__date">{wedding.date}</p>
        <p className="hero__text">
          Będzie nam niezmiernie miło, jeśli zechcecie być z nami w tym wyjątkowym dniu –
          podczas ceremonii zaślubin, a następnie na przyjęciu weselnym.
        </p>
        <a className="btn btn--ghost" href="#miejsca">
          Gdzie i kiedy?
        </a>
      </div>
    </header>
  )
}
