import React from 'react'

import { ErrorType } from 'polocas-napadu-core/proptypes'

export const AppError = () => (
  <div>Application failed with Error!</div>
)

AppError.propTypes = {
  error: ErrorType
}
