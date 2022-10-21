import React from 'react'

import { QueryFailure } from './QueryFailure'
import { QueryLoader } from './QueryLoader'
import { useQuery } from '@apollo/react-hooks'

function getEmptyKeys (data) {
  return Object.keys(data).filter(key => !data[key])
}

function getNotFoundError (data) {
  const error = data
    ? new Error(`Could not find ${getEmptyKeys(data).join(', ')}!`)
    : new Error('Could not find requested data')
  error.statusCode = 404
  error.code = 'ENOENT'
  return error
}

export const withQuery = ({
  query,
  optional = false,
  variables: staticVariables
}) => Component => ({ variables, ...props }) => {
  const { loading, error, data } = useQuery(query, {
    variables: { ...staticVariables, ...variables }
  })
  if (loading) {
    return <QueryLoader />
  }
  if (error) {
    return <QueryFailure error={error} />
  }
  if (!optional && (!data || getEmptyKeys(data).length > 0)) {
    throw getNotFoundError(data)
  }
  return <Component data={data} {...props} />
}
