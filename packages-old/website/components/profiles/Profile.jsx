import Breadcrumb from 'react-bootstrap/Breadcrumb'
import classnames from 'classnames'
import Markdown from 'react-markdown'
import React from 'react'
import styles from './Profile.module.scss'

import { Link } from '../bindings'
import { ProfileListItem } from './ProfileListItem'
import { ContentContainer, PageHeading, Title } from '../layout'
import { formatName } from './names'
import { Gallery } from '../photos'
import { gql } from 'apollo-boost'
import { imageQuery, photoQuery, withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const QUERY_PROFILE = gql`
  query GetProfile($slug: String!) {
    profile(slug: $slug) {
      about
      id
      slug
      name
      alias
      avatar ${imageQuery}
      photos ${photoQuery}
    }
  }
`

function ProfileComponent ({ data, t }) {
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
        <Breadcrumb>
          <Link route='about' passHref>
            <Breadcrumb.Item href=''>{t('about')}</Breadcrumb.Item>
          </Link>
          <Link route='members' passHref>
            <Breadcrumb.Item href=''>{t('members')}</Breadcrumb.Item>
          </Link>
          <Link route='profile' params={{ slug: profile.slug }}>
            <Breadcrumb.Item href=''>{profileName}</Breadcrumb.Item>
          </Link>
        </Breadcrumb>
        <Markdown source={profile.about} />
        <Gallery photos={profile.photos} />
      </ContentContainer>
    </>
  )
}

export const Profile = withTranslation(['common'])(
  withQuery({ query: QUERY_PROFILE })(ProfileComponent)
)
