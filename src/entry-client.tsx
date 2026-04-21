import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

const rootElement = document.getElementById('root')!

// Hydrate if prerendered content exists, else create root (dev mode)
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
