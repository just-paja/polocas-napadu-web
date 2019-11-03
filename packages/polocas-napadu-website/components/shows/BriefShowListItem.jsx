import React from 'react'

import { Link } from '../bindings'
import { Show } from '../proptypes'
import { EventStart } from '../events'

export const BriefShowListItem = ({ show }) => (
  <div>
    <Link route='showDetail' params={{ slug: show.slug }}>
      <a>
        {show.location.city}
        {' '}
        <EventStart start={show.start} />
        {' '}
        {show.name}
      </a>
    </Link>
  </div>
)

BriefShowListItem.propTypes = {
  show: Show.isRequired
}
