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
    // Współrzędne dla mapy – przy nich Google nie pokazuje karty miejsca zasłaniającej mapę.
    coords: '50.5746955,22.1225520',
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
    coords: '50.5861877,22.0437324',
    description: 'Po ceremonii zapraszamy na przyjęcie weselne w sali Olimp.',
    illustration: 'hall',
    photo: null,
  },
]

// Autokar dla gości – przystanki w kolejności przejazdu.
export const bus = {
  outbound: [
    { place: 'Osiek Jasielski', time: '12:00', note: 'wyjazd' },
    { place: 'Kościół w Pysznicy', time: 'przed 15:00', note: 'ceremonia ślubna' },
    { place: 'Dwór Olimp, Stalowa Wola', time: 'po mszy', note: 'przyjęcie weselne' },
  ],
  return: [
    { place: 'Dwór Olimp, Stalowa Wola', time: 'po zakończeniu zabawy', note: 'wyjazd' },
    { place: 'Jasło', note: 'przystanek' },
    { place: 'Osiek Jasielski', note: 'powrót' },
  ],
  returnNote:
    'W drodze powrotnej kierowca podjedzie do miejscowości w okolicy Jasła i Osieka Jasielskiego, ' +
    'w których Goście będą chcieli wysiąść.',
}

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
