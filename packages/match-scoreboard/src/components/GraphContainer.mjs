import React from 'react'

import { useQuery } from '@apollo/client'
import { useParams } from 'react-router'

const DEFAULT_POLL_INTERVAL = 500

const GraphContainer = (WrappedComponent, query, poll = false) => {
  if (!WrappedComponent) {
    throw new Error('You must pass a Component.')
  }

  return props => {
    const params = useParams()
    const { pollInterval, variables } = props
    const { data, error, loading } = useQuery(query, {
      pollInterval: poll ? pollInterval || DEFAULT_POLL_INTERVAL : null,
      variables: {
        ...params,
        ...variables,
      },
    })
    if (loading) {
      return <div>Loading...</div>
    }
    if (error) {
      return <div>Error!</div>
    }
    return <WrappedComponent data={data} variables={variables} {...props} />
  }
}

export default GraphContainer
