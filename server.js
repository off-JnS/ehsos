/**
 * Minimal static file server for Hostinger Node.js hosting.
 * Serves the Vite `dist/` build and falls back to index.html
 * for all unknown paths so React Router works on the server.
 * Zero external dependencies — only Node.js built-ins.
 */
import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, 'dist')
const PORT = process.env.PORT || 3000

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.mjs':  'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.mp4':  'video/mp4',
  '.webm': 'video/webm',
}

function serveFile(res, filePath, status = 200) {
  const ext = path.extname(filePath).toLowerCase()
  const type = MIME[ext] || 'application/octet-stream'
  const data = fs.readFileSync(filePath)
  res.writeHead(status, { 'Content-Type': type, 'Content-Length': data.length })
  res.end(data)
}

const server = http.createServer((req, res) => {
  // Strip query string and decode percent-encoding
  const urlPath = decodeURIComponent(req.url.split('?')[0])

  // Resolve the full path and guard against path-traversal attacks
  const resolved = path.resolve(DIST, '.' + urlPath)
  if (!resolved.startsWith(DIST + path.sep) && resolved !== DIST) {
    res.writeHead(403, { 'Content-Type': 'text/plain' })
    res.end('Forbidden')
    return
  }

  // Candidates: exact path, then path + index.html
  const candidates = [resolved, path.join(resolved, 'index.html')]

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return serveFile(res, candidate)
    }
  }

  // SPA fallback — let React Router handle the route client-side
  serveFile(res, path.join(DIST, 'index.html'))
})

server.listen(PORT, () => {
  console.log(`Ehso's Burger server running on port ${PORT}`)
})
