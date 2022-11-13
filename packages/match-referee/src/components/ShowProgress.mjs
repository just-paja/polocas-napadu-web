import classnames from 'classnames'
import React from 'react'

export const ShowProgress = ({ children, side = 'left' }) => (
  <div className={classnames('d-flex', { 'ms-auto': side === 'right' })}>
    {children}
  </div>
)
