import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import CookieBanner from './components/CookieBanner'

function getInitialPath(): string {
  if (typeof window !== 'undefined') return window.location.pathname
  const ssrPath = (globalThis as unknown as { __SSR_PATH__?: string }).__SSR_PATH__
  return ssrPath ?? '/'
}

export default function App() {
  const [path, setPath] = useState<string>(getInitialPath())

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('/') || href.startsWith('//')) return
      if (anchor.hasAttribute('target') || anchor.hasAttribute('download')) return
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
      e.preventDefault()
      window.history.pushState({}, '', href)
      setPath(href)
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  let page = <Home />
  if (path === '/impressum') page = <Impressum />
  else if (path === '/datenschutz') page = <Datenschutz />

  return (
    <>
      {page}
      <CookieBanner />
    </>
  )
}
