import React from 'react'

import { Link } from '../../lib/i18n'
import { Show } from '../proptypes'
import { EventLocation, EventStart } from '../events'

export const ShowListItem = ({ show }) => (
  <div>
    <Link as={`/show/${show.slug}`} href='/show-detail'>
      <a>{show.name}</a>
    </Link>
    <br />
    <EventStart
      allDay={show.allDay}
      start={show.start}
      end={show.end}
    />
    <br />
    {show.location && <EventLocation location={show.location} />}
  </div>
)

ShowListItem.propTypes = {
  show: Show.isRequired
}
