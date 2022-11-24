import React from 'react'

import { Link } from '../links.mjs'
import { Show } from 'polocas-napadu-core/proptypes'
import { EventStart } from 'polocas-napadu-ui/events.mjs'
import { LocationName } from '../locations/LocationName.mjs'

import styles from './BriefShowListItem.module.scss'

export const BriefShowListItem = ({ show }) => (
  <div className={styles.container}>
    <Link
      route="showDetail"
      params={{ slug: show.slug }}
      className={styles.content}
    >
      <span className={styles.location}>
        <EventStart start={show.start} />
        <span className={styles.additional}>
          <LocationName location={show.location} />
        </span>
      </span>
      <span>{show.name}</span>
    </Link>
  </div>
)

BriefShowListItem.propTypes = {
  show: Show.isRequired,
}
