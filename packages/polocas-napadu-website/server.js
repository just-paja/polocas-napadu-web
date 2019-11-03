const express = require('express')
const next = require('next')
const routes = require('./routes')

const nextI18next = require('./lib/i18n')
const middleware = require('./lib/i18n-middleware')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = routes.getRequestHandler(app)
const port = process.env.NODE_PORT || 3000;

(async () => {
  await app.prepare()
  const server = express()

  server.use(middleware(nextI18next))
  server.use(handle)

  await server.listen(port)
  console.log(`>>>> Ready on http://localhost:${port}`)
})()
