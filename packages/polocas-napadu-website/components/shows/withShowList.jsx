import { gql } from 'apollo-boost'
import { withQuery } from '../graphql'

const QUERY_SHOW_LIST = gql`
  query GetShowList(
    $future: Boolean = false,
    $past: Boolean = false,
    $limit: Int
  ) {
    showList(
      future: $future,
      limit: $limit,
      past: $past,
    ) {
      id,
      location {
        address,
        name,
      },
      name,
      showType {
        id,
        name
      },
      start,
      slug,
    }
  }
`

export const withShowList = ({ future, limit, past }) => withQuery({
  query: QUERY_SHOW_LIST,
  variables: { future, limit, past }
})
