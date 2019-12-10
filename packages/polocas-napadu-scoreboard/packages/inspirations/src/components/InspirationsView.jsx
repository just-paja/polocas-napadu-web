import React from 'react'
import ShowInspirations from './ShowInspirations'

import { RouterContext } from 'core/context'

const InspirationsView = ({ match }) => (
  <RouterContext.Provider value={match.params}>
    <ShowInspirations />
  </RouterContext.Provider>
)

export default InspirationsView
