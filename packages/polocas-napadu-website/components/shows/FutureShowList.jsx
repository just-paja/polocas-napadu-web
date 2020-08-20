import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'

import { NoFutureShows } from './NoFutureShows'
import { Show } from 'polocas-napadu-core/proptypes'
import { ShowListItem } from './ShowListItem'
import { withShowList } from './withShowList'

const FutureShowListComponent = ({ data, t }) => {
  return (
    <Row>
      {data.showList.length
        ? data.showList.map(show => (
          <ShowListItem key={show.id} show={show} />
        ))
        : <NoFutureShows />}
    </Row>
  )
}

FutureShowListComponent.propTypes = {
  data: PropTypes.shape({
    showList: PropTypes.arrayOf(Show).isRequired
  })
}

export const FutureShowList = withShowList({ future: true })(FutureShowListComponent)
