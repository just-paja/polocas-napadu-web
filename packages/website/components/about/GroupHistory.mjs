import React from 'react'
import Markdown from 'react-markdown'

import { ContentContainer } from '../layout/ContentContainer.mjs'
import { withTranslation } from '@polocas-napadu/ui/i18n'

export const GroupHistory = withTranslation(({ t }) => (
  <section>
    <ContentContainer>
      <h1>{t('group-history-heading')}</h1>
      <Markdown source={t('group-history-perex')} />
    </ContentContainer>
  </section>
))
