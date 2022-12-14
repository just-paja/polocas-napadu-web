import React from 'react'

import { createRoot } from 'react-dom/client'
import { App } from './App.mjs'

import '@polocas-napadu/ui/global.scss'

const render = RootComponent => {
  const root = createRoot(document.getElementById('root'))
  root.render(<RootComponent />)
}

const startUp = () => {
  render(App)
}

startUp()
