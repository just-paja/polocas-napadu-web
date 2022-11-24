import React from 'react'

import { Location } from 'polocas-napadu-core/proptypes'

export const LocationName = ({ location }) => (
  <>
    {location.city ? `${location.city}, ` : ''}
    {location.name}
  </>
)

LocationName.propTypes = {
  location: Location.isRequired,
}
