import classnames from 'classnames'
import Markdown from 'react-markdown'
import React from 'react'
import styles from './Profile.scss'

import { ProfileListItem } from './ProfileListItem'
import { ContentContainer, Title } from '../layout'
import { formatName } from './names'
import { Gallery } from '../photos'
import { gql } from 'apollo-boost'
import { withQuery } from '../graphql'

const QUERY_PROFILE = gql`
  query GetProfile($slug: String!) {
    profile(slug: $slug) {
      about,
      id,
      slug,
      name,
      avatar,
      photos {
        id,
        description,
        height,
        image,
        width,
      }
    }
  }
`

function ProfileComponent ({ data }) {
  const { profile } = data
  const profileName = formatName(profile)
  return (
    <>
      <div className={styles.heading}>
        <ContentContainer className={classnames(styles.center, styles.headingContainer)}>
          <ProfileListItem className={styles.bubble} dark profile={profile} />
          <h1>{profileName}</h1>
          <Title text={profileName} />
        </ContentContainer>
      </div>
      <ContentContainer className={classnames(styles.center, styles.column)}>
        <Markdown source={profile.about} />
        <Gallery photos={profile.photos} />
      </ContentContainer>
    </>
  )
}

export const Profile = withQuery({ query: QUERY_PROFILE })(ProfileComponent)
