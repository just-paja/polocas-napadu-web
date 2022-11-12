import getConfig from 'next/config'

import { ApolloClient, InMemoryCache } from '@apollo/client'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

export const apolloClient = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
})
