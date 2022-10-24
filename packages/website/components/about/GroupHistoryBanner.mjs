import React from 'react'
import Markdown from 'react-markdown'

import { ContentContainer } from '../layout'
import { withTranslation } from 'polocas-napadu-ui/i18n'

export const GroupHistoryBanner = withTranslation(({ t }) => (
  <ContentContainer column as="section">
    <h2>{t('groupHistoryHeading')}</h2>
    <Markdown source={t('groupHistoryPerex')} />
  </ContentContainer>
))
