import { gql } from 'apollo-boost'
import { withQuery } from '../graphql'

const QUERY_SHOW_LIST = gql`
  query GetShowList(
    $future: Boolean = false,
    $past: Boolean = false,
    $limit: Int,
    $orderBy: String,
  ) {
    showList(
      future: $future,
      limit: $limit,
      past: $past,
      orderBy: $orderBy,
    ) {
      id,
      location {
        id,
        city,
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

export function withShowList ({
  future,
  limit,
  orderBy,
  past
}) {
  const order = orderBy || future ? 'start' : '-start'
  return withQuery({
    query: QUERY_SHOW_LIST,
    variables: { future, limit, orderBy: order, past }
  })
}
