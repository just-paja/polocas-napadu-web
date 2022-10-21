import React from 'react'

import { ErrorType } from 'polocas-napadu-core/proptypes'

export function QueryFailure () {
  return <div>Error!</div>
}

QueryFailure.propTypes = {
  error: ErrorType
}
