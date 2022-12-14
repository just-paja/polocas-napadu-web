import React from 'react'

import { gql } from '@apollo/client'
import { CommonLayout, ContentContainer } from '../components/layout'
import { Title } from '../components/meta.mjs'
import { OgImage } from '../components/opengraph.mjs'
import { ShowFormatGallery } from '../components/shows/ShowFormatGallery.mjs'
import { Heading, Section } from '@polocas-napadu/ui/content.mjs'
import { useTranslation } from 'next-i18next'
import { withPageProps } from '../pages.mjs'
import { compose, withQueryset } from '@polocas-napadu/ui/decorators.mjs'
import { showFormatListQuery } from '../graphql.mjs'

export const getServerSideProps = compose(
  withPageProps,
  withQueryset({
    showFormats: {
      query: gql(showFormatListQuery),
    },
  }),
  props => props
)

export default function RepertoirPage({ showTypeList }) {
  const { t } = useTranslation()
  return (
    <CommonLayout>
      <Section>
        <ContentContainer>
          <Title
            text={t('repertoir')}
            description={t('repertoirOgDescription')}
          />
          <OgImage src="/static/pixmaps/og-show-list.jpg" />
          <Heading>{t('repertoir')}</Heading>
        </ContentContainer>
        <ShowFormatGallery showFormats={showTypeList} />
      </Section>
    </CommonLayout>
  )
}
