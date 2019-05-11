import React from 'react'

import { ArrayList } from '../text'
import { withNamespaces } from '../../lib/i18n'

export const NotFound = withNamespaces('error')(
  ({ t }) => (
    <div>
      <h1>{t('error-not-found')}</h1>
      <p>{t('error-not-found-explanation-text')}</p>
      <ArrayList text={t('error-not-found-help-text', { returnObjects: true }) || []} />
    </div>
  )
)
