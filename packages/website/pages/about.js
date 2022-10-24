import React from 'react'

import { gql } from '@apollo/client'
import { CommonLayout, ContentContainer } from '../components/layout'
import { compose, withQueryset } from 'polocas-napadu-ui/decorators.mjs'
import { GroupDescription } from '../components/about'
import { AnchoredArticle } from '../components/articles.mjs'
import { ProfileGroupList } from '../components/profiles'
import { ShowsCounter } from '../components/shows/ShowsCounter.mjs'
import { Title } from '../components/meta.mjs'
import { withPageProps } from '../pages.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'
import { profileGroupListQuery, showCountQuery } from '../graphql.mjs'

export const getServerSideProps = compose(
  withPageProps,
  withQueryset({
    profileGroups: {
      query: gql(profileGroupListQuery),
    },
    showCount: {
      query: gql(showCountQuery),
    },
  }),
  props => props
)

export default withTranslation(({ profileGroupList, showTypeList, t }) => (
  <CommonLayout>
    <Title text={t('about')} />
    <ContentContainer>
      <GroupDescription />
    </ContentContainer>
    <ProfileGroupList groups={profileGroupList} />
    <ContentContainer>
      <ShowsCounter showTypes={showTypeList} />
    </ContentContainer>
    <AnchoredArticle variables={{ siteAnchor: 'history' }} />
  </CommonLayout>
))
