import classnames from 'classnames'
import Markdown from 'react-markdown'
import React from 'react'
import styles from './ProfileListItem.scss'

import { ContentContainer, Title } from '../layout'
import { formatName } from './names'
import { gql } from 'apollo-boost'
import { withQuery } from '../graphql'

const QUERY_PROFILE = gql`
  query GetProfile($slug: String!) {
    profile(slug: $slug) {
      about,
      id,
      name,
    }
  }
`

function ProfileComponent ({ data }) {
  const { profile } = data
  return (
    <ContentContainer>
      <Title text={formatName(profile)} />
      <h1>{formatName(profile)}</h1>
      <Markdown source={profile.about} />
    </ContentContainer>
  )
}

export const Profile = withQuery({ query: QUERY_PROFILE })(ProfileComponent)
