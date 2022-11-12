import React from 'react'
import styles from './SpectatorView.module.scss'

import { MatchStage } from './MatchStage.mjs'

export const SpectatorView = () => (
  <div className={styles.spectatorView}>
    <div className={styles.board}>
      <MatchStage />
    </div>
  </div>
)
