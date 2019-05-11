import App, { Container } from 'next/app'
import React from 'react'

import { ApolloProvider } from 'react-apollo'
import { AppError } from '../components/app'
import { appWithTranslation } from '../lib/i18n'
import { withApolloClient } from '../lib/with-apollo-client'

import './_app.scss'

class MyApp extends App {
  state = {
    error: null
  }

  componentDidCatch (error) {
    this.setState({ error })
  }

  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          {this.state.error
            ? <AppError />
            : <Component {...pageProps} />
          }
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(appWithTranslation(MyApp))
