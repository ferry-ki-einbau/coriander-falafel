import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = 'https://coriander-falafel.de'

interface RouteMeta {
  title: string
  description: string
  canonical: string
}

const routeMeta: Record<string, RouteMeta> = {
  '/': {
    title: 'Coriander Falafel Großhandel Berlin — Vegan, Halal & Handmade',
    description: 'Dein Falafel-Großhandel in Berlin. Tiefgefrorene Falafel in 4 Größen für Imbisse, Restaurants, Caterer & Hotels. Vegan, glutenfrei, halal — nach Familienrezept seit 1960, in Berlin seit 2007.',
    canonical: `${BASE}/`,
  },
  '/impressum': {
    title: 'Impressum | Coriander Falafel Großhandel Berlin',
    description: 'Impressum von Coriander Falafel Großhandel Berlin.',
    canonical: `${BASE}/impressum`,
  },
  '/datenschutz': {
    title: 'Datenschutz | Coriander Falafel Großhandel Berlin',
    description: 'Datenschutzerklärung von Coriander Falafel Großhandel Berlin.',
    canonical: `${BASE}/datenschutz`,
  },
}

const routes = [
  { path: '/', out: 'dist/index.html' },
  { path: '/impressum', out: 'dist/impressum/index.html' },
  { path: '/datenschutz', out: 'dist/datenschutz/index.html' },
]

function injectMeta(html: string, meta: RouteMeta): string {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${meta.description}"`)
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${meta.canonical}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${meta.canonical}"`)
}

async function prerender() {
  const { render } = await import('./dist/server/entry-server.js')
  const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8')

  for (const route of routes) {
    const appHtml = render(route.path)
    const meta = routeMeta[route.path]
    let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    if (meta) html = injectMeta(html, meta)
    const outPath = resolve(__dirname, route.out)
    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, html)
    console.log(`✓ Prerendered: ${route.out}`)
  }
}

prerender().catch(err => { console.error(err); process.exit(1) })
