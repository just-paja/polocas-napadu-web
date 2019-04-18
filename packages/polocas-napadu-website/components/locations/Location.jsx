import React from 'react'

import { LocationProp } from '../proptypes'
import { Address } from './Address'

export const Location = ({ location }) => (
  <div>
    <strong>{location.name}</strong>
    <Address address={location.address} />
  </div>
)

Location.propTypes = {
  location: LocationProp.isRequired
}
