import React from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { ShowListItem } from './ShowListItem';
import { Show } from '../proptypes';
import { withQuery } from '../graphql';

const QUERY_SHOW = gql`
  query GetShow($showId: Int!) {
    show(id: $showId) {
      id,
      location {
        name
      },
      name,
      start,
    }
  }
`;

const ShowDetailInner = ({ data }) => (
  <div>
    show
  </div>
);

export const ShowDetail = withQuery(ShowDetailInner, QUERY_SHOW);
