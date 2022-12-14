import Breadcrumb from 'react-bootstrap/Breadcrumb'
import classnames from 'classnames'
import Markdown from 'react-markdown'
import React from 'react'
import styles from './Profile.module.scss'

import { ContentContainer } from '../layout/ContentContainer.mjs'
import { formatName } from './names.mjs'
import { Gallery } from '../images.mjs'
import { Link } from '../links.mjs'
import { PageHeading } from '../layout/PageHeading.mjs'
import { ProfileListItem } from './ProfileList.mjs'
import { Title } from '../meta.mjs'
import { withTranslation } from '@polocas-napadu/ui/i18n.mjs'

export const ProfileComponent = withTranslation(({ data, t }) => {
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
          <Link route="about" passHref>
            <Breadcrumb.Item href="">{t('about')}</Breadcrumb.Item>
          </Link>
          <Link route="members" passHref>
            <Breadcrumb.Item href="">{t('members')}</Breadcrumb.Item>
          </Link>
          <Link route="profile" params={{ slug: profile.slug }}>
            <Breadcrumb.Item href="">{profileName}</Breadcrumb.Item>
          </Link>
        </Breadcrumb>
        <Markdown source={profile.about} />
        <Gallery photos={profile.photos} />
      </ContentContainer>
    </>
  )
})
