import React from 'react'
import styles from './FixedDialog.module.scss'

export const FixedDialog = ({ children }) => (
  <div className={styles.fix}>
    <div className={styles.center}>{children}</div>
  </div>
)
