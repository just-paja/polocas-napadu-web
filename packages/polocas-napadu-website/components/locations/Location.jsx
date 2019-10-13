import React from 'react'
import styles from './Location.scss'

import { LocationProp } from '../proptypes'
import { Address } from './Address'

export const Location = ({ location }) => (
  <div className={styles.location}>
    <strong>{[location.city, location.name].filter(item => item).join(', ')}</strong>
    <Address address={location.address} />
  </div>
)

Location.propTypes = {
  location: LocationProp.isRequired
}
