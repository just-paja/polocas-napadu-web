import React from 'react'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: process.env.apiUrl,
  cache: new InMemoryCache(),
})

export const Apollo = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)
