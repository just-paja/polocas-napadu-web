import React from 'react'

import { createRoot } from 'react-dom/client'
import { Apollo } from '@polocas-napadu/ui/apollo.mjs'
import { App } from './App.mjs'

import '@polocas-napadu/ui/global.scss'

const render = RootComponent => {
  const root = createRoot(document.getElementById('root'))
  root.render(
    <Apollo>
      <RootComponent />
    </Apollo>
  )
}

const startUp = () => {
  render(App)
}

startUp()
