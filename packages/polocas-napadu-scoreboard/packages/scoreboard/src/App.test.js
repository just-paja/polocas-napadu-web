import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools';

import App from './App';

describe('app', () => {
  let client;

  beforeEach(() => {
    const schema = makeExecutableSchema({
      typeDefs: 'type Show { id: Int! }',
    });
    client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new SchemaLink({ schema }),
    });
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App client={client} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
