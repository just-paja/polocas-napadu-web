import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './List.scss'

import { Children } from '../proptypes'

export function List ({ as: Component, className, children }) {
  return (
    <Component className={classnames(styles.list, className)}>
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
