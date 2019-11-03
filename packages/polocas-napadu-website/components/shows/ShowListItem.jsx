import classnames from 'classnames'
import Col from 'react-bootstrap/Col'
import React from 'react'
import styles from './ShowListItem.scss'

import { Link } from '../bindings'
import { Show } from '../proptypes'
import { EventLocation, EventStart } from '../events'

export function ShowListItem ({ show }) {
  const isFuture = false
  return (
    <Col md={6} lg={3} className={styles.col}>
      <Link
        route='showDetail'
        params={{ slug: show.slug }}
      >
        <a className={classnames(styles.host, { [styles.future]: isFuture })}>
          <div className={styles.name}>{show.name}</div>
          <div>{show.showType && show.showType.name}</div>
          <div><EventStart start={show.start} /></div>
          <div>{show.location && <EventLocation location={show.location} />}</div>
        </a>
      </Link>
    </Col>
  )
}

ShowListItem.propTypes = {
  show: Show.isRequired
}
