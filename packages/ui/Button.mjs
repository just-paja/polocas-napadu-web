import classnames from 'classnames'
import React, { forwardRef } from 'react'
import styles from './Button.module.scss'

import { Button as BsButton, Spinner } from 'react-bootstrap'

const ReflessButton = (
  { className, children, disabled, icon, loading, ...props },
  ref
) => {
  const iconContent = loading ? (
    <Spinner
      animation="border"
      aria-hidden="true"
      as="span"
      role="status"
      size="sm"
    />
  ) : (
    icon
  )
  return (
    <BsButton
      disabled={disabled}
      className={classnames(styles.button, className)}
      {...props}
      ref={ref}
    >
      {iconContent ? <span className={styles.icon}>{iconContent}</span> : null}
      <span>{children}</span>
    </BsButton>
  )
}

export const Button = forwardRef(ReflessButton)
