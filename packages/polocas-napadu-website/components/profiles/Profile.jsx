import classnames from 'classnames'
import Markdown from 'react-markdown'
import React from 'react'
import styles from './Profile.module.scss'

import { ProfileListItem } from './ProfileListItem'
import { ContentContainer, PageHeading, Title } from '../layout'
import { formatName } from './names'
import { Gallery } from '../photos'
import { gql } from 'apollo-boost'
import { withQuery } from '../graphql'

const QUERY_PROFILE = gql`
  query GetProfile($slug: String!) {
    profile(slug: $slug) {
      about
      id
      slug
      name
      alias
      avatar
      photos {
        id
        description
        height
        image
        width
      }
    }
  }
`

function ProfileComponent ({ data }) {
  const { profile } = data
  const profileName = formatName(profile)
  return (
    <>
      <PageHeading>
        <ProfileListItem className={styles.bubble} dark profile={profile} />
        <h1 className={styles.heading}>{profileName}</h1>
        <Title text={profileName} />
      </PageHeading>
      <ContentContainer className={classnames(styles.center, styles.column)}>
        <Markdown source={profile.about} />
        <Gallery photos={profile.photos} />
      </ContentContainer>
    </>
  )
}

export const Profile = withQuery({ query: QUERY_PROFILE })(ProfileComponent)
