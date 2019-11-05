import PropTypes from 'prop-types'
import React from 'react'
import styles from './LogisticInfo.scss'

import { Children } from '../proptypes'

export function LogisticInfo ({ icon: Icon, summary, children }) {
  return (
    <details className={styles.box}>
      <summary>
        <Icon className={styles.icon} />
        &nbsp;
        {summary}
      </summary>
      {children}
    </details>
  )
}

LogisticInfo.propTypes = {
  children: Children,
  icon: PropTypes.func.isRequired,
  summary: Children.isRequired
}
