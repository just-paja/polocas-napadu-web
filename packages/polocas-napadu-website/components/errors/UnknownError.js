import React from 'react'
import Typography from '@material-ui/core/Typography'

import { ArrayList } from '../text'
import { withNamespaces } from '../../lib/i18n'

export const UnknownError = withNamespaces(['error'])(
  ({ t }) => (
    <div>
      <Typography variant='h1'>{t('error-unknown')}</Typography>
      <p>{t('error-unknown-explanation-text')}</p>
      <ArrayList text={t('error-unknown-help-text', { returnObjects: true }) || []} />
    </div>
  )
)
