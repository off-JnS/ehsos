/**
 * Post-build: copy dist/index.html into each SPA route sub-folder
 * so that direct URL access works on any static file host, including
 * Hostinger, without needing any server-side configuration.
 *
 * e.g.  https://yourdomain.com/speisekarte
 *       → served from dist/speisekarte/index.html  ✓
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(__dirname, '..', 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'))

const ROUTES = ['speisekarte', 'impressum', 'datenschutz']

for (const route of ROUTES) {
  const dir = path.join(dist, route)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), template)
  console.log(`✓  dist/${route}/index.html`)
}

console.log('All SPA routes pre-rendered.')
