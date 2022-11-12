import qs from 'query-string'
import React from 'react'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export const stripData = ({ data }) => data
export const mergeQueryResults = results =>
  results.reduce((aggr, chunk) => Object.assign(aggr, chunk), {})

export const Apollo = ({ apiUrl, children }) => {
  const params = qs.parse(document.location.search)

  if ('apiUrl' in params) {
    sessionStorage.setItem('apiUrl', params.apiUrl)
    document.location.search = ''
  }

  const sessionApiUrl = sessionStorage.getItem('apiUrl')
  const client = new ApolloClient({
    uri: sessionApiUrl || apiUrl || process.env.apiUrl,
    cache: new InMemoryCache(),
  })
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
