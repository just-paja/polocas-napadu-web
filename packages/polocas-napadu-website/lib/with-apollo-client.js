import React from 'react'
import initApollo from './init-apollo'
import Head from 'next/head'

import { getDataFromTree } from '@apollo/react-ssr'

export function withApolloClient (App) {
  return class Apollo extends React.Component {
    static displayName = 'withApollo(App)'
    static async getInitialProps (ctx) {
      const { Component, res, router } = ctx

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo()
      if (!process.browser) {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <App
              {...appProps}
              apolloClient={apollo}
              Component={Component}
              router={router}
            />
          )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          // if (error.statusCode === 404) {
          // }
          if (res) {
            res.statusCode = 404
            res.end(404)
            console.error('Error while running `getDataFromTree`', error)
            return
          } else {
            // error.code = 'ENOENT'
            throw error
          }
        }
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract()

      return {
        ...appProps,
        apolloState
      }
    }

    constructor (props) {
      super(props)
      this.apolloClient = initApollo(props.apolloState)
    }

    render () {
      return (
        <App {...this.props} apolloClient={this.apolloClient} />
      )
    }
  }
}
