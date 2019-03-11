import React from 'react'

import { Query } from 'react-apollo'

import { QueryLoader } from './QueryLoader'

export const withQuery = (Component, query, optional = false) => (props) => (
  <Query query={query} variables={props.variables}>
    {({ data, loading, error }) => {
      if (loading) {
        return <QueryLoader />
      }
      if (error) {
        throw error
      }
      if (!optional && Object.keys(data).some(key => !data[key])) {
        const error = new Error('Not Found!')
        error.statusCode = 404
        error.code = 'ENOENT'
        throw error
      }
      return <Component data={data} {...props} />
    }}
  </Query>
)
