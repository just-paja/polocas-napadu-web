import Container from 'react-bootstrap/Container'
import React from 'react'

import { Children, ClassName } from '../proptypes'

export function ContentContainer ({ children, className }) {
  return (
    <Container className={className}>
      {children}
    </Container>
  )
}

ContentContainer.propTypes = {
  children: Children.isRequired,
  className: ClassName
}
