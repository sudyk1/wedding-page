// Generuje kod QR prowadzący do strony – do wydruku na zaproszeniu.
// Użycie: npm run qr -- https://<użytkownik>.github.io/wedding-page/
import QRCode from 'qrcode'

const url = process.argv[2]
if (!url) {
  console.error('Podaj adres strony, np.: npm run qr -- https://uzytkownik.github.io/wedding-page/')
  process.exit(1)
}

const options = {
  errorCorrectionLevel: 'H',
  margin: 2,
  color: { dark: '#5b4a5eff', light: '#ffffffff' },
}

await QRCode.toFile('qr-zaproszenie.png', url, { ...options, width: 1200 })
await QRCode.toFile('qr-zaproszenie.svg', url, { ...options, type: 'svg' })
console.log(`Zapisano qr-zaproszenie.png i qr-zaproszenie.svg dla: ${url}`)
