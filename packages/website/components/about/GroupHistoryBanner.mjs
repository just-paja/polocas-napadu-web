import React from 'react'
import Markdown from 'react-markdown'

import { Heading, Section } from '@polocas-napadu/ui/content.mjs'
import { ContentContainer } from '../layout/ContentContainer.mjs'
import { withTranslation } from '@polocas-napadu/ui/i18n'

export const GroupHistoryBanner = withTranslation(({ t }) => (
  <ContentContainer column as={Section}>
    <Heading>{t('groupHistoryHeading')}</Heading>
    <Markdown source={t('groupHistoryPerex')} />
  </ContentContainer>
))
