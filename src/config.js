// Wszystkie dane zaproszenia w jednym miejscu.
// Wartości w nawiasach kwadratowych to placeholdery – podmień je na właściwe.

export const couple = {
  bride: 'Ewa',
  groom: 'Adam',
  // Ścieżka do zdjęcia, np. './photos/para.jpg' (plik w katalogu public/photos). null = ilustracja.
  photo: null,
}

export const wedding = {
  date: '10.07.2027',
  // Termin potwierdzenia obecności
  rsvpDeadline: '10.05.2027',
}

export const venues = [
  {
    id: 'ceremony',
    label: 'Ślub',
    time: 'Godzina 15:00',
    name: 'Parafia Podwyższenia Krzyża Świętego i św. Jana Chrzciciela',
    address: 'Wolności 297, 37-403 Pysznica',
    description: 'Uroczysta msza święta, podczas której powiemy sobie sakramentalne „tak”.',
    illustration: 'church',
    photo: null,
  },
  {
    id: 'reception',
    label: 'Wesele',
    time: 'Po mszy ślubnej',
    name: 'Dwór Olimp',
    address: 'Kusocińskiego 1G, 37-450 Stalowa Wola',
    description: 'Po ceremonii zapraszamy na przyjęcie weselne w sali Olimp.',
    illustration: 'hall',
    photo: null,
  },
]

export const contacts = [
  {
    role: 'Panna Młoda',
    name: couple.bride,
    email: 'panna.mloda@example.com',
    phone: '+48 600 000 000',
  },
  {
    role: 'Pan Młody',
    name: couple.groom,
    email: 'pan.mlody@example.com',
    phone: '+48 600 000 001',
  },
]
