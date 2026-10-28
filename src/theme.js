import { createContext, useContext } from 'react'

// Motyw strony ustawia atrybut <html data-theme="..."> w danym pliku HTML:
// 'folk' – index.html (ludowy), 'lace' – koronka/index.html (koronka i lawenda),
// 'classic' – klasyczna/index.html (biel, złoto i koronka).
export const currentTheme = () => document.documentElement.dataset.theme || 'folk'

export const ThemeContext = createContext('folk')

export const useTheme = () => useContext(ThemeContext)
