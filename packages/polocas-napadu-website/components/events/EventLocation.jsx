import React from 'react'

import { LocationProp } from '../proptypes'

export const EventLocation = ({ location }) => (
  <span>{location.name}</span>
)

EventLocation.propTypes = {
  location: LocationProp.isRequired
}
