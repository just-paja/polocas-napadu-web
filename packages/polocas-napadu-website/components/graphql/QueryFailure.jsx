import React from 'react'

import { ErrorType } from '../proptypes'

export function QueryFailure ({ error }) {
  console.error(error)
  return <div>Error!</div>
}

QueryFailure.propTypes = {
  error: ErrorType
}
