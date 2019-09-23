import React from 'react'

import { ErrorType } from '../proptypes'

export function QueryFailure () {
  return <div>Error!</div>
}

QueryFailure.propTypes = {
  error: ErrorType
}
