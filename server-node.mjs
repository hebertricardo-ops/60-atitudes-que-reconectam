import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const publicDir = join(__dirname, 'dist', 'client')
const port = process.env.PORT || 3000

const { default: server } = await import('./dist/server/server.js')

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.txt': 'text/plain',
}

createServer(async (req, res) => {
  try {
    // Serve static assets from dist/client/
    const pathname = req.url.split('?')[0]
    const filePath = join(publicDir, pathname)
    if (existsSync(filePath) && statSync(filePath).isFile()) {
      const ext = extname(filePath)
      const mime = MIME[ext] || 'application/octet-stream'
      const { size } = statSync(filePath)
      const isImmutable = pathname.startsWith('/assets/')
      res.writeHead(200, {
        'Content-Type': mime,
        'Content-Length': size,
        'Cache-Control': isImmutable
          ? 'public, max-age=31536000, immutable'
          : 'public, max-age=3600',
      })
      createReadStream(filePath).pipe(res)
      return
    }

    // SSR fallthrough
    const host = req.headers.host || `localhost:${port}`
    const proto = req.socket.encrypted ? 'https' : 'http'
    const url = `${proto}://${host}${req.url}`

    const chunks = []
    for await (const chunk of req) chunks.push(chunk)
    const bodyBuffer = chunks.length > 0 ? Buffer.concat(chunks) : null

    const headers = {}
    for (let i = 0; i < req.rawHeaders.length; i += 2) {
      headers[req.rawHeaders[i].toLowerCase()] = req.rawHeaders[i + 1]
    }

    const request = new Request(url, {
      method: req.method,
      headers,
      body: bodyBuffer && req.method !== 'GET' && req.method !== 'HEAD'
        ? bodyBuffer
        : undefined,
      duplex: 'half',
    })

    const response = await server.fetch(request)

    const resHeaders = {}
    response.headers.forEach((value, key) => { resHeaders[key] = value })
    res.writeHead(response.status, resHeaders)

    if (response.body) {
      const reader = response.body.getReader()
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        res.write(value)
      }
    }
    res.end()
  } catch (err) {
    console.error('[server]', err)
    if (!res.headersSent) res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end('Internal Server Error')
  }
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
