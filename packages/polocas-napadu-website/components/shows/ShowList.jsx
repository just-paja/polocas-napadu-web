import React from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { ShowListItem } from './ShowListItem';
import { Show } from '../proptypes';
import { withQuery } from '../graphql';

const QUERY_SHOW_LIST = gql`
  query GetShowList {
    showList {
      id,
      location {
        name
      },
      name,
      start,
    }
  }
`;

const ShowListInner = ({ data }) => (
  data.showList.map(show => (
    <ShowListItem key={show.id} show={show} />
  ))
);

export const ShowList = withQuery(ShowListInner, QUERY_SHOW_LIST);
