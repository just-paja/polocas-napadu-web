import React from 'react'

import { Query } from 'react-apollo'

import { QueryFailure } from './QueryFailure'
import { QueryLoader } from './QueryLoader'

function getEmptyKeys (data) {
  return Object.keys(data).filter(key => !data[key])
}

function getNotFoundError (data) {
  const empty = getEmptyKeys(data).join(', ')
  const error = new Error(`Could not find ${empty}!`)
  error.statusCode = 404
  error.code = 'ENOENT'
  return error
}

export const withQuery = ({
  query,
  optional = false,
  variables
}) => Component => (props) => (
  <Query query={query} variables={{ ...props.variables, ...variables }}>
    {({ data, loading, error }) => {
      if (loading) {
        return <QueryLoader />
      }
      if (error) {
        return <QueryFailure error={error} />
      }
      if (!optional && getEmptyKeys(data).length > 0) {
        throw getNotFoundError(data)
      }
      return <Component data={data} {...props} />
    }}
  </Query>
)
