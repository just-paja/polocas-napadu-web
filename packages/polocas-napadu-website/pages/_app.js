import App, { Container } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import React from 'react'

import { ApolloProvider } from 'react-apollo'
import { AppError } from '../components/app'
import { appWithTranslation } from '../lib/i18n'
import { getPageContext } from '../lib/pageContext'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { withApolloClient } from '../lib/with-apollo-client'

class MyApp extends App {
  state = {
    error: null
  }
  pageContext = getPageContext()

  componentDidCatch (error) {
    this.setState({ error })
  }

  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <CssBaseline />
            <ApolloProvider client={apolloClient}>
              {this.state.error
                ? <AppError />
                : <Component {...pageProps} />
              }
            </ApolloProvider>
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    )
  }
}

export default withApolloClient(appWithTranslation(MyApp))
