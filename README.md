# Wedding Landing Page

Cyfrowe zaproszenie na ślub i wesele – strona, do której prowadzi kod QR z papierowego zaproszenia.

Sekcje: zaproszenie → miejsca (mapy Google + wyznaczanie trasy) → potwierdzenie obecności.

## Uruchomienie

```bash
npm install
npm run dev
```

## Wersje graficzne

Ten sam kod i te same dane, trzy motywy:

- `/` – motyw ludowy (pastelowe kwiaty, wycinanki) – [`index.html`](index.html),
- `/koronka/` – biała koronka, lawenda, ciepłe barwy – [`koronka/index.html`](koronka/index.html),
- `/klasyczna/` – klasyczna biel, złoto i koronka, w nagłówku Panna Młoda – [`klasyczna/index.html`](klasyczna/index.html).

Motyw wybiera atrybut `<html data-theme="...">`. Kolory i wygląd motywów są w
[`src/theme-lace.css`](src/theme-lace.css) i [`src/theme-classic.css`](src/theme-classic.css), a ozdoby w
[`src/components/LaceOrnaments.jsx`](src/components/LaceOrnaments.jsx) i [`src/components/ClassicOrnaments.jsx`](src/components/ClassicOrnaments.jsx).

## Personalizacja

Wszystkie dane są w [`src/config.js`](src/config.js): imiona, data, termin RSVP, adresy, e-maile i telefony.
Placeholdery mają postać `[...]`.

Zdjęcia: wrzuć pliki do `public/photos/` i ustaw w `config.js` np. `photo: './photos/para.jpg'`
(dla Pary Młodej, kościoła i sali). Dopóki `photo` jest `null`, wyświetlana jest ilustracja.

## Gałęzie i wdrożenie

- `feature` – bieżące prace,
- `develop` – każdy push uruchamia GitHub Actions ([`deploy.yml`](.github/workflows/deploy.yml)) i publikuje stronę na GitHub Pages.

Jednorazowa konfiguracja repozytorium na GitHubie:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. **Settings → Environments → github-pages → Deployment branches**: dodaj `develop`
   (albo ustaw `develop` jako gałąź domyślną) – inaczej wdrożenie zostanie zablokowane.

## Kod QR

Po pierwszym wdrożeniu:

```bash
npm run qr -- https://<użytkownik>.github.io/wedding-page/
```

Powstaną `qr-zaproszenie.png` (1200 px) i `qr-zaproszenie.svg` (wektor do druku).
