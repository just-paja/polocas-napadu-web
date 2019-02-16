import React from 'react';
import gql from 'graphql-tag';

import { Query } from 'react-apollo';
import { translate } from 'react-i18next'

import { withNamespaces } from '../lib/i18n';

export const queryTest = gql`
  query {
    showList {
      id,
      name
    }
  }
`;

class HomePage extends React.Component {
  static getInitialProps() {
    return { namespacesRequired: ['common'] };
  }

  render() {
    return (
      <Query query={queryTest}>
        {({ data, error, loading }) => {
          if (error) {
            return <div>error</div>;
          }
          if (loading) {
            return <div>loading</div>;
          }
          return (
            <ul>
              {data.showList.map(show => (
                <li key={show.id}>{show.name}</li>
              ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default translate(['common'])(HomePage);
