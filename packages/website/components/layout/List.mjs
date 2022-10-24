import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './List.module.scss'

import { Children } from 'polocas-napadu-core/proptypes'

export function List({ as: Component, className, children }) {
  return (
    <Component className={classnames(styles.list, className)}>
      {children}
    </Component>
  )
}

List.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: Children,
}

List.defaultProps = {
  as: 'div',
}
