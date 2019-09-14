import { gql } from 'apollo-boost'
import { withQuery } from '../graphql'

const QUERY_PEOPLE = gql`
  query GetProfileList($group: Int) {
    profileList(group: $group) {
      id,
      name,
      alias,
      slug,
      photos {
        height,
        id,
        image,
        width,
      }
    }
  }
`

export const withPeopleGroup = ({ group }) => withQuery({
  query: QUERY_PEOPLE,
  variables: { group }
})
