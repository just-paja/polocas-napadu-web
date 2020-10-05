import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'
import React from 'react'

import { withTranslation } from '../../lib/i18n'

function NoFutureShowsComponent ({ data, t }) {
  return (
    <Alert variant='light'>
      {t('noShowsPlanned')}
    </Alert>
  )
}

NoFutureShowsComponent.propTypes = {
  t: PropTypes.func.isRequired
}

export const NoFutureShows = withTranslation(['common'])(NoFutureShowsComponent)
