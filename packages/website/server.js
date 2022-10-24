const { createServer } = require('http')

const PORT_DEFAULT = 3000

const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || PORT_DEFAULT
const hostname = process.env.FRONTEND_HOST || 'localhost'
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, err => {
    if (err) {
      throw err
    }
    console.log(`> Ready on http://localhost:${port}`)
  })
})
