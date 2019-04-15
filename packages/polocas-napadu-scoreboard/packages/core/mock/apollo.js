import React from 'react'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SchemaLink } from 'apollo-link-schema'
import { makeExecutableSchema } from 'graphql-tools'

export const mockClient = () => {
  const schema = makeExecutableSchema({
    typeDefs: 'type Show { id: Int! }',
  })
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new SchemaLink({ schema }),
  })
  return { schema, client }
}

export const apolloWrap = (children) => {
  const { client } = mockClient()
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}
