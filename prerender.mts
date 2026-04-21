import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const routes = [
  { path: '/', out: 'dist/index.html' },
  { path: '/impressum', out: 'dist/impressum/index.html' },
  { path: '/datenschutz', out: 'dist/datenschutz/index.html' },
]

async function prerender() {
  const { render } = await import('./dist/server/entry-server.js')
  const template = readFileSync(resolve(__dirname, 'dist/index.html'), 'utf-8')

  for (const route of routes) {
    const appHtml = render(route.path)
    const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    const outPath = resolve(__dirname, route.out)
    mkdirSync(dirname(outPath), { recursive: true })
    writeFileSync(outPath, html)
    console.log(`✓ Prerendered: ${route.out}`)
  }
}

prerender().catch(err => { console.error(err); process.exit(1) })
