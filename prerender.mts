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
  '/falafel-hersteller': {
    title: 'Falafel Hersteller Berlin — Coriander Falafel | Direktbezug seit 2007',
    description: 'Falafel Hersteller aus Berlin — handgemacht, vegan, halal. Direktbezug ohne Zwischenhändler. Für Gastronomie, Imbisse & Großhändler. Proben kostenlos.',
    canonical: `${BASE}/falafel-hersteller`,
  },
  '/falafel-tk': {
    title: 'Falafel TK — Tiefkühl-Falafel für die Gastronomie | Coriander Falafel Berlin',
    description: 'Falafel TK frisch produziert & tiefgefroren. Ohne Konservierungsstoffe, 6+ Monate haltbar. 50 Stück pro Beutel. Vegan, glutenfrei, halal. Jetzt anfragen.',
    canonical: `${BASE}/falafel-tk`,
  },
  '/falafel-premium': {
    title: 'Premium Falafel — Handgemacht nach Familienrezept | Coriander Falafel Berlin',
    description: 'Premium Falafel aus Berlin — außen knusprig, innen saftig und grün. Frische Kichererbsen, Kräuter, kein Pulver. Direkt vom Hersteller. Proben kostenlos.',
    canonical: `${BASE}/falafel-premium`,
  },
  '/falafel-made-in-germany': {
    title: 'Falafel Made in Germany — Hergestellt in Berlin | Coriander Falafel',
    description: 'Falafel Made in Germany — produziert in Berlin nach deutschen Qualitätsstandards. Handgemacht, vegan, halal. Direktlieferung deutschlandweit. Anfragen.',
    canonical: `${BASE}/falafel-made-in-germany`,
  },
  '/falafel-grosshandel': {
    title: 'Falafel kaufen große Mengen — Großhandel direkt vom Hersteller | Berlin',
    description: 'Falafel in großen Mengen kaufen — direkt beim Berliner Hersteller. Keine Zwischenhändler, faire Preise, flexible Mengen. Proben kostenlos. Jetzt anfragen.',
    canonical: `${BASE}/falafel-grosshandel`,
  },
}

const routes = [
  { path: '/', out: 'dist/index.html' },
  { path: '/impressum', out: 'dist/impressum/index.html' },
  { path: '/datenschutz', out: 'dist/datenschutz/index.html' },
  { path: '/falafel-hersteller', out: 'dist/falafel-hersteller/index.html' },
  { path: '/falafel-tk', out: 'dist/falafel-tk/index.html' },
  { path: '/falafel-premium', out: 'dist/falafel-premium/index.html' },
  { path: '/falafel-made-in-germany', out: 'dist/falafel-made-in-germany/index.html' },
  { path: '/falafel-grosshandel', out: 'dist/falafel-grosshandel/index.html' },
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
