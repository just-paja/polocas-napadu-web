import classnames from 'classnames'
import Container from 'react-bootstrap/Container'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './ContentContainer.module.scss'

import { Children, ClassName } from 'polocas-napadu-core/proptypes'

export function ContentContainer ({
  as,
  children,
  className,
  column,
  ...props
}) {
  return (
    <Container
      as={as}
      className={classnames({ [styles.column]: column }, className)}
      {...props}
    >
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
