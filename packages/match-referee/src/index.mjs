import React from 'react'

import { createRoot } from 'react-dom/client'
import { App } from './App.mjs'
import { initLocalization } from 'polocas-napadu-ui/i18n.mjs'

import cs from 'polocas-napadu-website/public/locales/cs/common.json'
import en from 'polocas-napadu-website/public/locales/en/common.json'

import 'polocas-napadu-ui/global.scss'

const render = RootComponent => {
  const root = createRoot(document.getElementById('root'))
  root.render(<RootComponent />)
}

const startUp = () => {
  initLocalization({ cs, en })
  render(App)
}

startUp()
