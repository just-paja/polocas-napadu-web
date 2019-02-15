import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const queryTest = gql`
  query {
    showList {
      name
    }
  }
`;

export default () => (
  <Query query={queryTest}>
    {({ data, loading }) => (
      <ul>
        {data.showList.map(show => (
          <li>{show.name}</li>
        ))}
      </ul>
    )}
  </Query>
);
