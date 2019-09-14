import classnames from 'classnames'
import React from 'react'
import styles from './ShowListItem.scss'

import { Link } from '../../routes'
import { Show } from '../proptypes'
import { EventLocation, EventStart } from '../events'

export const ShowListItem = ({ show }) => (
  <div className={styles.host}>
    <div className={classnames('lead', styles.item)}>
      <EventStart
        allDay={show.allDay}
        className={styles.date}
        end={show.end}
        start={show.start}
      />
      {' '}
      <Link route='showDetail' params={{ slug: show.slug }}>
        <a>{show.name}</a>
      </Link>
    </div>
    <div className={styles.item}>
      <span className={styles.date}>
        {show.location && <EventLocation location={show.location} />}
      </span>
      {' '}
      {show.showType.name}
    </div>
  </div>
)

ShowListItem.propTypes = {
  show: Show.isRequired
}
