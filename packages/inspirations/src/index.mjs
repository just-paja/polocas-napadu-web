import React from 'react'

import { Apollo } from '@polocas-napadu/ui/apollo.mjs'
import { App } from './App.mjs'
import { createRoot } from 'react-dom/client'
import { initLocalization } from '@polocas-napadu/ui/i18n.mjs'

import cs from '@polocas-napadu/website/public/locales/cs/common.json'
import en from '@polocas-napadu/website/public/locales/en/common.json'

import './index.scss'

const render = RootComponent => {
  const root = createRoot(document.getElementById('root'))
  root.render(
    <Apollo>
      <RootComponent />
    </Apollo>
  )
}

const startUp = () => {
  initLocalization({ cs, en })
  render(App)
}

startUp()
