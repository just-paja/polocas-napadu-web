import App from 'next/app'
import getConfig from 'next/config'
import moment from 'moment-timezone'
import React from 'react'
import Router from '../routes'
import withGa from 'next-ga'

import { ApolloProvider } from '@apollo/react-components'
import { AppError } from '../components/app'
import { appWithTranslation, i18n } from '../lib/i18n'
import { Favicon } from '../components/layout'
import { withApolloClient } from '../lib/with-apollo-client'
import { withRouter } from 'next/router'

import './_app.scss'

const { publicRuntimeConfig } = getConfig()
const { GA_CODE } = publicRuntimeConfig

class MyApp extends App {
  state = {
    error: null
  }

  static async getInitialProps (ctx) {
    const props = super.getInitialProps ? await super.getInitialProps(ctx) : ctx
    const req = ctx && ctx.ctx && ctx.ctx.req
    moment.locale((req && req.language) || i18n.language)
    moment.tz.setDefault('Europe/Prague')
    return props
  }

  componentDidCatch (error) {
    this.setState({ error })
  }

  componentDidUpdate () {
    if (this.props.router) {
      if (this.props.router.asPath.indexOf(`/${i18n.language}`) !== 0) {
        const nextLang = this.props.router.asPath.split('/')[1]
        if (nextLang && nextLang !== i18n.language) {
          i18n.changeLanguage(nextLang)
        }
      }
    }
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

export default withApolloClient(withRouter(appWithTranslation(withGa(GA_CODE, Router)(MyApp))))
