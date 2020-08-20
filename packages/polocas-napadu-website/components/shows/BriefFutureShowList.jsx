import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'

import { List } from '../layout'
import { NoFutureShows } from './NoFutureShows'
import { Show } from 'polocas-napadu-core/proptypes'
import { ShowListItem } from './ShowListItem'
import { withShowList } from './withShowList'

const BriefFutureShowListComponent = ({ data }) => {
  return (
    <List as={Row}>
      {data.showList.length
        ? data.showList.map(show => (
          <ShowListItem key={show.id} show={show} />
        ))
        : <NoFutureShows />}
    </List>
  )
}

BriefFutureShowListComponent.propTypes = {
  data: PropTypes.shape({
    showList: PropTypes.arrayOf(Show)
  })
}

export const BriefFutureShowList = withShowList({ future: true })(BriefFutureShowListComponent)
