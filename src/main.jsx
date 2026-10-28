import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeContext, currentTheme } from './theme.js'
import './styles.css'
import './theme-lace.css'
import './theme-classic.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContext.Provider value={currentTheme()}>
      <App />
    </ThemeContext.Provider>
  </StrictMode>,
)
