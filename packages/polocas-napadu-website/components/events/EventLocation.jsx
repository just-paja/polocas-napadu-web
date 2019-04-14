import React from 'react'

import { Location } from '../proptypes'

export const EventLocation = ({ location }) => (
  <span>{location.name}</span>
)

EventLocation.propTypes = {
  location: Location.isRequired
}
