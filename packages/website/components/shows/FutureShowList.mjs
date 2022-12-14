import Alert from 'react-bootstrap/Alert'
import React from 'react'
import Row from 'react-bootstrap/Row'

import { ShowListItem } from './ShowListItem.mjs'
import { withTranslation } from '@polocas-napadu/ui/i18n'

const NoFutureShows = withTranslation(({ t }) => (
  <Alert className="mt-3" variant="light">
    {t('noShowsPlanned')}
  </Alert>
))

export const FutureShowList = ({ shows }) => {
  return (
    <Row>
      {shows.length ? (
        shows.map(show => <ShowListItem key={show.id} show={show} />)
      ) : (
        <NoFutureShows />
      )}
    </Row>
  )
}
