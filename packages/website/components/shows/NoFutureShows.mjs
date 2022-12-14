import Alert from 'react-bootstrap/Alert'
import React from 'react'

import { withTranslation } from '@polocas-napadu/ui/i18n'

export const NoFutureShows = withTranslation(({ t }) => (
  <Alert variant="light">{t('noShowsPlanned')}</Alert>
))
