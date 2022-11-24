import React from 'react'
import Row from 'react-bootstrap/Row'

import { List } from '../layout/List.mjs'
import { NoFutureShows } from './NoFutureShows.mjs'
import { ShowListItem } from './ShowListItem.mjs'

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
