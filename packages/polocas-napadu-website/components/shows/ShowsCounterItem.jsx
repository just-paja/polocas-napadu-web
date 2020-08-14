import React from 'react'
import styles from './ShowsCounterItem.module.scss'

import { Link } from '../bindings'
import { withTranslation } from '../../lib/i18n'

function ShowsCounterItemComponent ({ format }) {
  return (
    <Link route='showFormatDetail' params={{ slug: format.slug }}>
      <a className={styles.item}>
        <span className={styles.count}>{format.showCount}x</span>{' '}
        <span>{format.name}</span>
      </a>
    </Link>
  )
}

export const ShowsCounterItem = withTranslation(['common'])(
  ShowsCounterItemComponent
)
