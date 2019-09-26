import React from 'react'

import { LocationProp } from '../proptypes'

function nonEmpty (item) {
  return Boolean(item)
}

export const EventLocation = ({ location }) => (
  <span>{[location.city, location.name].filter(nonEmpty).join(', ')}</span>
)

EventLocation.propTypes = {
  location: LocationProp.isRequired
}
