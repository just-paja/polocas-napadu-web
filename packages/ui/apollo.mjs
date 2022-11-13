import qs from 'query-string'
import React from 'react'

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  useQuery,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useParams } from 'react-router'

export const stripData = ({ data }) => data
export const mergeQueryResults = results =>
  results.reduce((aggr, chunk) => Object.assign(aggr, chunk), {})

export const Apollo = ({ apiUrl, children }) => {
  const params = qs.parse(document.location.search)
  if ('authToken' in params) {
    sessionStorage.setItem('authToken', params.token)
  }
  if ('apiUrl' in params) {
    sessionStorage.setItem('apiUrl', params.apiUrl)
    document.location.search = ''
  }

  const sessionApiUrl = sessionStorage.getItem('apiUrl')
  const sessionAuthToken = sessionStorage.getItem('authToken')
  const httpLink = createHttpLink({
    uri: sessionApiUrl || apiUrl || process.env.apiUrl,
  })
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: sessionAuthToken ? `JWT ${sessionAuthToken}` : undefined,
      },
    }
  })

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  })
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

const DEFAULT_POLL_INTERVAL = 500

export const withQuery = (Component, query, poll = false) => {
  if (!Component) {
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
    return <Component data={data} variables={variables} {...props} />
  }
}
