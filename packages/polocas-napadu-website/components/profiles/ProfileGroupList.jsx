import React from 'react'
import styles from './ProfileGroupList.module.scss'

import { ContentContainer } from '../layout'
import { gql } from 'apollo-boost'
import { ProfileGroupListItem } from './ProfileGroupListItem'
import { withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const QUERY_PROFILE_GROUPS = gql`
  query GetProfileGroupList {
    profileGroupList {
      description
      id
      name
    }
  }
`

const ProfileGroupListComponent = ({ data, t }) => (
  <section className={styles.block} id={t('membersAnchor')}>
    <ContentContainer className={styles.container}>
      <h2 className={styles.heading}>{t('members')}</h2>
      <div className={styles.list}>
        {data.profileGroupList.map(group => (
          <ProfileGroupListItem key={group.id} group={group} />
        ))}
      </div>
    </ContentContainer>
  </section>
)

export const ProfileGroupList = withQuery({ query: QUERY_PROFILE_GROUPS })(
  withTranslation(['common'])(ProfileGroupListComponent)
)
