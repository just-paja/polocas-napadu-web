import React from 'react'

import { List } from '../layout'
import { BriefShowListItem } from './BriefShowListItem.mjs'

export const RecentShowList = ({ shows }) => {
  if (!shows.length) {
    return null
  }
  return (
    <List>
      {shows.map(show => (
        <BriefShowListItem key={show.id} show={show} />
      ))}
    </List>
  )
}
