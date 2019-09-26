import classnames from 'classnames'
import Container from 'react-bootstrap/Container'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './ContentContainer.scss'

import { Children, ClassName } from '../proptypes'

export function ContentContainer ({ as, children, className, column }) {
  return (
    <Container as={as} className={classnames({ [styles.column]: column }, className)}>
      {children}
    </Container>
  )
}

ContentContainer.propTypes = {
  children: Children.isRequired,
  className: ClassName,
  column: PropTypes.bool
}

ContentContainer.defaultProps = {
  column: false
}
