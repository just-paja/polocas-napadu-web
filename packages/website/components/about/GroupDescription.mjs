import React from 'react'
import Markdown from 'react-markdown'

import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'

export const GroupDescription = withTranslation(({ t }) => (
  <section>
    <h1>{t('groupDescriptionHeading')}</h1>
    <Markdown source={t('groupDescriptionPerex')} />
  </section>
))
