import classnames from 'classnames'
import React from 'react'
import styles from './MainControls.module.scss'

import { MatchSpeedDial } from './MatchSpeedDial.mjs'
import { useMatch } from '@polocas-napadu/core/context.mjs'

export const MainControls = ({ center = false, children }) => {
  const { closed } = useMatch()
  return (
    <div className={classnames(styles.form, { 'text-center': center })}>
      {closed ? null : (
        <MatchSpeedDial className={styles.dial} label="Přidat" />
      )}
      {children}
    </div>
  )
}
