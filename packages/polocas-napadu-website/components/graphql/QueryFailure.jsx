import React from 'react'

import { ErrorType } from '../proptypes'

export const QueryFailure = () => (
  <div>Error!</div>
)

QueryFailure.propTypes = {
  error: ErrorType
}
