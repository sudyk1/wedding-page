import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Względna ścieżka bazowa – strona działa na GitHub Pages (https://<user>.github.io/<repo>/)
// niezależnie od nazwy repozytorium, a także na własnej domenie.
// Wersje strony z tym samym kodem: / (motyw ludowy), /koronka/ (koronka i lawenda),
// /klasyczna/ (biel, złoto i koronka).
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        koronka: resolve(import.meta.dirname, 'koronka/index.html'),
        klasyczna: resolve(import.meta.dirname, 'klasyczna/index.html'),
      },
    },
  },
})
