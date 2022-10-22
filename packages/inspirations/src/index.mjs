import React from 'react'

import { createRoot } from 'react-dom/client'
import { App } from './App.mjs'

import * as serviceWorker from './serviceWorker.mjs'

import './index.scss'

const render = RootComponent => {
  const root = createRoot(document.getElementById('root'))
  root.render(<RootComponent />)
}

const startUp = () => {
  render(App)
}

startUp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
