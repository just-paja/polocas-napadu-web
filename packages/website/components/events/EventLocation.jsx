import React from 'react'

import { Location } from 'polocas-napadu-core/proptypes'

export const EventLocation = ({ location }) => (
  <span>{location.name}</span>
)

EventLocation.propTypes = {
  location: Location.isRequired
}
