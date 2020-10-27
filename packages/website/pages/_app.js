import App from 'next/app'
import getAbsoluteUrl from 'next-absolute-url'
import getConfig from 'next/config'
import Head from 'next/head'
import moment from 'moment-timezone'
import React from 'react'

import { ApolloProvider } from '@apollo/react-components'
import { AppError } from '../components/app'
import { appWithTranslation, i18n } from '../lib/i18n'
import { Favicon } from '../components/layout'
import { OgUrl } from '../components/social'
import { UrlBase } from 'polocas-napadu-core/context'
import { withApolloClient } from '../lib/with-apollo-client'
import { withRouter } from 'next/router'

import './_app.scss'

function Gtm () {
  const config = getConfig()
  const { publicRuntimeConfig } = config
  const { GTM_CODE } = publicRuntimeConfig
  if (!GTM_CODE) {
    return null
  }
  const innerHTML = {
    __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_CODE}');`
  }
  return (
    <Head>
      <script dangerouslySetInnerHTML={innerHTML} />
    </Head>
  )
}

class MyApp extends App {
  state = {
    error: null
  }

  static async getInitialProps (ctx) {
    const props = super.getInitialProps ? await super.getInitialProps(ctx) : ctx
    const req = ctx && ctx.ctx && ctx.ctx.req
    moment.locale((req && req.language) || i18n.language)
    moment.tz.setDefault('Europe/Prague')
    const urlBase = getAbsoluteUrl(req)
    return {
      ...props,
      urlBase: {
        ...urlBase,
        url: `${urlBase.origin}${req ? req.path : window.location.pathname}`
      }
    }
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
    const { Component, pageProps, apolloClient, urlBase } = this.props
    moment.locale(i18n.language)
    moment.tz.setDefault('Europe/Prague')

    return (
      <>
        <Gtm />
        <Favicon />
        <UrlBase.Provider value={urlBase}>
          <OgUrl />
          <ApolloProvider client={apolloClient}>
            {this.state.error ? <AppError /> : <Component {...pageProps} />}
          </ApolloProvider>
        </UrlBase.Provider>
      </>
    )
  }
}

export default withApolloClient(withRouter(appWithTranslation(MyApp)))
