import classnames from 'classnames'
import React from 'react'
import styles from './ShowListItem.module.scss'

import { Col } from 'react-bootstrap'
import { Link } from '../links.mjs'
import { Show } from 'polocas-napadu-core/proptypes.mjs'
import { EventLocation, EventStart } from '../events.mjs'

export function ShowListItem({ show }) {
  const isFuture = false
  return (
    <Col md={6} lg={3} className={styles.col}>
      <Link
        route="showDetail"
        params={{ slug: show.slug }}
        className={classnames(styles.host, { [styles.future]: isFuture })}
      >
        <div>{show.showType && show.showType.name}</div>
        <div>
          <EventStart start={show.start} />
        </div>
        <div>{show.location && <EventLocation location={show.location} />}</div>
      </Link>
    </Col>
  )
}

ShowListItem.propTypes = {
  show: Show.isRequired,
}
