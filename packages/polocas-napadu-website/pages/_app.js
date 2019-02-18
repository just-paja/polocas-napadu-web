import App, { Container } from 'next/app';
import React from 'react';

import { I18nextProvider } from 'react-i18next';
import { ApolloProvider } from 'react-apollo';

import { appWithTranslation } from '../lib/i18n';
import withApolloClient from '../lib/with-apollo-client';

class MyApp extends App {
  render () {
    const { Component, pageProps, apolloClient, ...other } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(appWithTranslation(MyApp));
