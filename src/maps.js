const isMobileDevice = () =>
  typeof navigator !== 'undefined' &&
  /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)

export const mapEmbedUrl = (query) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&hl=pl&z=15&output=embed`

// Brak parametru `origin` => Google Maps startuje z bieżącej lokalizacji użytkownika.
// Na telefonie od razu uruchamiamy nawigację (aplikacja Google Maps),
// na komputerze otwieramy planer trasy, w którym można wpisać punkt startowy.
export const directionsUrl = (query, mobile = isMobileDevice()) => {
  const params = new URLSearchParams({
    api: '1',
    destination: query,
    travelmode: 'driving',
  })
  if (mobile) params.set('dir_action', 'navigate')
  return `https://www.google.com/maps/dir/?${params}`
}

export { isMobileDevice }
