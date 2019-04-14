import React from 'react'

import { withNamespaces } from '../../lib/i18n'

export const UnknownError = withNamespaces(['error'])(
  ({ t }) => (
    <div>
      <h1>{t('error-unknown')}</h1>
      <p>
        {t('error-unknown-help-text')}
      </p>
    </div>
  )
)
