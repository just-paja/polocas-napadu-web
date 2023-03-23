import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from '../App'
import { MockedProvider } from '@apollo/client/testing'

describe('app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const root = ReactDOM.createRoot(div)
    root.render(
      <MockedProvider>
        <App />
      </MockedProvider>
    )
    root.unmount()
  })
})
