import React from 'react'
import Row from 'react-bootstrap/Row'

import { List } from '../layout'
import { NoFutureShows } from './NoFutureShows'
import { ShowListItem } from './ShowListItem'

export const BriefFutureShowList = ({ shows }) => {
  return (
    <List as={Row}>
      {shows.length ? (
        shows.map(show => <ShowListItem key={show.id} show={show} />)
      ) : (
        <NoFutureShows />
      )}
    </List>
  )
}
