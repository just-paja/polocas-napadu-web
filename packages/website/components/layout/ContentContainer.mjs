import classnames from 'classnames'
import Container from 'react-bootstrap/Container'
import React from 'react'
import styles from './ContentContainer.module.scss'

export function ContentContainer({
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
