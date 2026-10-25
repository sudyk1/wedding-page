import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Względna ścieżka bazowa – strona działa na GitHub Pages (https://<user>.github.io/<repo>/)
// niezależnie od nazwy repozytorium, a także na własnej domenie.
export default defineConfig({
  plugins: [react()],
  base: './',
})
