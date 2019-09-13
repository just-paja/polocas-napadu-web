import Container from 'react-bootstrap/Container'
import React from 'react'

export const ContentContainer = ({ children, className }) => (
  <Container className={className}>
    {children}
  </Container>
)
