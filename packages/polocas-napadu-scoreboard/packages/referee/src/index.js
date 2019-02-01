import ApolloClient from 'apollo-boost';
import qs from 'query-string';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

import './index.css';

const params = qs.parse(document.location.search);

if ('token' in params) {
  sessionStorage.setItem('refereeToken', params.token);
  document.location.search = '';
} else {
  const token = sessionStorage.getItem('refereeToken');
  const apolloClient = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    request: async operation => {
      operation.setContext({
        headers: {
          authorization: `JWT ${token}`,
        },
      });
    },
  });

  const render = (RootComponent) => {
    ReactDOM.render(
      <RootComponent client={apolloClient} />,
      document.getElementById('root')
    );
  };

  const startUp = () => {
    render(App);
  };

  startUp();

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();

  if (module.hot) {
    module.hot.accept('./App', () => {
      // eslint-disable-next-line global-require
      render(require('./App').default);
      console.info(':: Hot reload root component');
    });
  }
}
