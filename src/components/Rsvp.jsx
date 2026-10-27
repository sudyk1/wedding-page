import { contacts, couple, wedding } from '../config.js'
import { Emblem } from './Ornaments.jsx'

const mailto = (email) => {
  const subject = `Potwierdzenie obecności – ślub ${couple.bride} & ${couple.groom}, ${wedding.date}`
  const body =
    'Dzień dobry!\n\nPotwierdzam / nie potwierdzam (niepotrzebne skreślić) obecność na ślubie i weselu.\n' +
    'Liczba osób: \nImiona i nazwiska: \nAutokar (tak/nie, ile osób): \nUwagi (np. dieta): \n\nPozdrawiam'
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const tel = (phone) => `tel:${phone.replace(/\s+/g, '')}`

export default function Rsvp() {
  return (
    <section className="section section--rsvp" id="potwierdzenie">
      <h2 className="section__title">Potwierdzenie obecności</h2>
      <p className="section__subtitle">
        Prosimy o informację, czy będziecie z nami – lub o wiadomość w razie nieobecności –
        do dnia <strong>{wedding.rsvpDeadline}</strong>.
      </p>
      <div className="contacts">
        {contacts.map((c) => (
          <div className="contact" key={c.role}>
            <Emblem size={48} petals={8} outer="var(--lavender)" inner="var(--butter)" center="var(--rose)" />
            <p className="contact__role">{c.role}</p>
            <p className="contact__name">{c.name}</p>
            <a className="contact__link" href={mailto(c.email)}>
              ✉ {c.email}
            </a>
            <a className="contact__link" href={tel(c.phone)}>
              ☎ {c.phone}
            </a>
          </div>
        ))}
      </div>
      <p className="rsvp__note">
        Wystarczy jeden e-mail, telefon lub SMS do Panny Młodej albo Pana Młodego.
        Dajcie też znać, czy chcecie skorzystać z <a href="#autokar">autokaru</a>.
      </p>
    </section>
  )
}
