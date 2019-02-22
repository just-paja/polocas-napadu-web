import React from 'react';

import { Query } from 'react-apollo';

import { QueryLoader } from './QueryLoader';
import { QueryFailure } from './QueryFailure';

export const withQuery = (Component, query) => (props) => (
  <Query query={query} variables={props.variables}>
    {({ data, loading, error }) => {
      if (loading) {
        return <QueryLoader />;
      }
      if (error) {
        return <QueryFailure />;
      }
      return <Component data={data} {...props} />;
    }}
  </Query>
);
