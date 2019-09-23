import { gql } from 'apollo-boost'
import { withQuery } from '../graphql'

const QUERY_PEOPLE = gql`
  query GetProfileList($group: Int) {
    profileList(group: $group) {
      alias,
      avatar,
      id,
      name,
      slug,
    }
  }
`

export const withPeopleGroup = ({ group }) => withQuery({
  query: QUERY_PEOPLE,
  variables: { group }
})
