import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import App from './App.tsx'

export function render(path = '/') {
  ;(globalThis as unknown as { __SSR_PATH__: string }).__SSR_PATH__ = path
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
