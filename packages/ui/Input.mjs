import classnames from 'classnames'
import React, { forwardRef } from 'react'

import { Form } from 'react-bootstrap'

const InputLabel = ({ required, label }) => (
  <Form.Label className={classnames({ 'fw-bold': required })}>
    {label}
  </Form.Label>
)

const ReflessPlainInput = (
  { controlId, helpText, label, required, ...inputProps },
  ref
) => (
  <Form.Group controlId={controlId}>
    <InputLabel required={required} label={label} />
    <Form.Control {...inputProps} ref={ref} />
    {helpText ? <Form.Text as="div">{helpText}</Form.Text> : null}
  </Form.Group>
)

export const PlainInput = forwardRef(ReflessPlainInput)
