import React from 'react'
import styles from './List.scss'

import { Children } from '../proptypes'

export function List ({ children }) {
  return (
    <div className={styles.list}>
      {children}
    </div>
  )
}

List.propTypes = {
  children: Children
}
