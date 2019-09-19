import Markdown from 'react-markdown'
import React from 'react'

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
      name,
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
  return (
    <ContentContainer>
      <Title text={formatName(profile)} />
      <h1>{formatName(profile)}</h1>
      <Markdown source={profile.about} />
      <Gallery photos={profile.photos} />
    </ContentContainer>
  )
}

export const Profile = withQuery({ query: QUERY_PROFILE })(ProfileComponent)
