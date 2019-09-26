import classnames from 'classnames'
import React from 'react'
import styles from './ShowListItem.scss'

import { Link } from '../../routes'
import { Show } from '../proptypes'
import { EventLocation, EventStart } from '../events'

export function ShowListItem ({ show }) {
  const isFuture = false
  return (
    <Link
      route='showDetail'
      params={{ slug: show.slug }}
    >
      <a className={classnames(styles.host, { [styles.future]: isFuture })}>
        <div className={classnames('lead', styles.item, styles.topLine)}>
          <EventStart
            allDay={show.allDay}
            className={styles.date}
            end={show.end}
            start={show.start}
          />
          {' '}
          <span>{show.name}</span>
        </div>
        <div className={styles.item}>
          <span className={styles.date}>
            {show.location && <EventLocation location={show.location} />}
          </span>
          {' '}
          {show.showType && show.showType.name}
        </div>
      </a>
    </Link>
  )
}

ShowListItem.propTypes = {
  show: Show.isRequired
}
