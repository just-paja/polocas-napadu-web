import PropTypes from 'prop-types'
import React from 'react'
import styles from './List.scss'

import { Children } from '../proptypes'

export function List ({ as: Component, children }) {
  return (
    <Component className={styles.list}>
      {children}
    </Component>
  )
}

List.propTypes = {
  as: PropTypes.string,
  children: Children
}

List.defaultProps = {
  as: 'div'
}
