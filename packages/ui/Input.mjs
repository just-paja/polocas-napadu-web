import classnames from 'classnames'
import Form from 'react-bootstrap/Form'
import React, { forwardRef } from 'react'

export const InputLabel = ({ colon = true, formCheck, required, text }) => (
  <Form.Label
    className={classnames({
      'form-check-label': formCheck,
      'fw-bold': required,
    })}
  >
    {text}
    {colon ? ':' : ''}
  </Form.Label>
)

const ReflessPlainInput = (
  { controlId, helpText, label, required, ...inputProps },
  ref
) => (
  <Form.Group controlId={controlId}>
    <InputLabel required={required} text={label} />
    <Form.Control {...inputProps} ref={ref} />
    {helpText ? <Form.Text as="div">{helpText}</Form.Text> : null}
  </Form.Group>
)

export const PlainInput = forwardRef(ReflessPlainInput)
