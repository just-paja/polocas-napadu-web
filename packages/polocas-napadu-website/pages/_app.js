import App, { Container } from 'next/app'
import moment from 'moment'
import React from 'react'

import { ApolloProvider } from 'react-apollo'
import { AppError, Favicon } from '../components'
import { appWithTranslation } from '../lib/i18n'
import { withApolloClient } from '../lib/with-apollo-client'

import './_app.scss'

class MyApp extends App {
  state = {
    error: null
  }

  static async getInitialProps (ctx) {
    const props = super.getInitialProps ? super.getInitialProps(ctx) : ctx
    if (ctx.req && ctx.req.locale) {
      moment.setLocale(ctx.req.locale)
    }
    return props
  }

  componentDidCatch (error) {
    this.setState({ error })
  }

  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <Favicon />
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
