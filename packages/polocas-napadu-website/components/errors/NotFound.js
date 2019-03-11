import React from 'react'

import { withNamespaces } from '../../lib/i18n'

export const NotFound = withNamespaces('error')(
  ({ t }) => (
    <div>
      <h1>{t('error-not-found')}</h1>
      <p>{t('error-not-found-explanation-text')}</p>
      <ul>
        {(t('error-not-found-help-text', { returnObjects: true }) || []).map(text => (
          <li key={text}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
)
