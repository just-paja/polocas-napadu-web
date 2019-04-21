import React from 'react'
import Typography from '@material-ui/core/Typography'

import { ArrayList } from '../text'
import { withNamespaces } from '../../lib/i18n'

export const NotFound = withNamespaces('error')(
  ({ t }) => (
    <div>
      <Typography variant='h1'>{t('error-not-found')}</Typography>
      <p>{t('error-not-found-explanation-text')}</p>
      <ArrayList text={t('error-not-found-help-text', { returnObjects: true }) || []} />
    </div>
  )
)
