import App from 'next/app'
import moment from 'moment-timezone'
import React from 'react'

import { ApolloProvider } from 'react-apollo'
import { AppError } from '../components/app'
import { appWithTranslation, i18n } from '../lib/i18n'
import { Favicon } from '../components/layout'
import { withApolloClient } from '../lib/with-apollo-client'

import './_app.scss'

class MyApp extends App {
  state = {
    error: null
  }

  static async getInitialProps (ctx) {
    const props = super.getInitialProps ? await super.getInitialProps(ctx) : ctx
    const req = ctx && ctx.ctx && ctx.ctx.req
    console.log(req && req.language, i18n.language)
    moment.locale((req && req.language) || i18n.language)
    moment.tz.setDefault('Europe/Prague')
    return props
  }

  componentDidCatch (error) {
    this.setState({ error })
  }

  render () {
    const { Component, pageProps, apolloClient } = this.props
    moment.locale(i18n.language)
    moment.tz.setDefault('Europe/Prague')

    return (
      <>
        <Favicon />
        <ApolloProvider client={apolloClient}>
          {this.state.error
            ? <AppError />
            : <Component {...pageProps} />}
        </ApolloProvider>
      </>
    )
  }
}

export default withApolloClient(appWithTranslation(MyApp))
