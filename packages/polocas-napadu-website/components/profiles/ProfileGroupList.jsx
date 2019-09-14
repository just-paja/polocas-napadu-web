import React from 'react'
import styles from './ProfileGroupList.scss'

import { ContentContainer } from '../layout'
import { gql } from 'apollo-boost'
import { ProfileGroupListItem } from './ProfileGroupListItem'
import { withQuery } from '../graphql'

const QUERY_PROFILE_GROUPS = gql`
  query GetProfileGroupList {
    profileGroupList {
      description,
      id,
      name,
    }
  }
`

const ProfileGroupListComponent = ({ data }) => (
  <div className={styles.block}>
    <ContentContainer className={styles.container}>
      <h2>Členové</h2>
      <div className={styles.list}>
        {data.profileGroupList.map(group => (
          <ProfileGroupListItem
            key={group.id}
            group={group}
          />
        ))}
      </div>
    </ContentContainer>
  </div>
)

export const ProfileGroupList = withQuery({ query: QUERY_PROFILE_GROUPS })(ProfileGroupListComponent)
