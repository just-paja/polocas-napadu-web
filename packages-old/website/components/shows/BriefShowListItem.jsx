import React from 'react'

import { Link } from '../bindings'
import { Show } from 'polocas-napadu-core/proptypes'
import { EventStart } from '../events'
import { LocationName } from '../locations'

import styles from './BriefShowListItem.module.scss'

export const BriefShowListItem = ({ show }) => (
  <div className={styles.container}>
    <Link route='showDetail' params={{ slug: show.slug }}>
      <a className={styles.content}>
        <span className={styles.location}>
          <EventStart start={show.start} />
          <span className={styles.additional}>
            <LocationName location={show.location} />
          </span>
        </span>
        <span>{show.name}</span>
      </a>
    </Link>
  </div>
)

BriefShowListItem.propTypes = {
  show: Show.isRequired
}
