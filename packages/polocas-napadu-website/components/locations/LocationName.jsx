import React from 'react'

import { LocationProp } from '../proptypes'

export const LocationName = ({ location }) => (
  <>
    {location.city ? `${location.city}, ` : ''}
    {location.name}
  </>
)

LocationName.propTypes = {
  location: LocationProp.isRequired
}
