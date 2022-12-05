const express = require('express')
const next = require('next')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()
const portDefault = 3000
const port = process.env.NODE_PORT || portDefault

async function main() {
  await app.prepare()
  const server = express()
  server.use(handle)
  await server.listen(port)
  console.log(`>>>> Ready on http://localhost:${port}`)
}

main()
