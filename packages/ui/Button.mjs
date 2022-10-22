import React, { forwardRef } from 'react'

import { Button as BsButton, Spinner } from 'react-bootstrap'

const ReflessButton = (
  { children, disabled, icon, loading, ...props },
  ref
) => {
  return (
    <BsButton disabled={disabled} {...props} ref={ref}>
      {loading ? (
        <Spinner
          animation="border"
          aria-hidden="true"
          as="span"
          className="me-2"
          role="status"
          size="sm"
        />
      ) : null}
      {!loading && icon}
      {children}
    </BsButton>
  )
}

export const Button = forwardRef(ReflessButton)
