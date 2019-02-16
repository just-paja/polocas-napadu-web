import App, { Container } from 'next/app';
import React from 'react';
import withApolloClient from '../lib/with-apollo-client';

import { I18nextProvider } from 'react-i18next';
import { ApolloProvider } from 'react-apollo';
import { appWithTranslation } from '../lib/i18n';

class MyApp extends App {
  render () {
    const { Component, pageProps, apolloClient, ...other } = this.props;
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default withApolloClient(appWithTranslation(MyApp));
