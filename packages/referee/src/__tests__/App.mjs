import App from '../App.mjs'
import React from 'react'
import ReactDOM from 'react-dom'

import { MockedProvider } from '@apollo/client/testing'

describe('app', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MockedProvider>
        <App />
      </MockedProvider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
