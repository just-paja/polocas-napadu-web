import React from 'react'
import styles from './PauseStage.module.scss'

import { GameHistory } from './GameHistory.mjs'
import { Teams } from './Teams.mjs'

export const PauseStage = () => (
  <>
    <Teams />
    <p className={styles.text}>V první půlce jste viděli</p>
    <div className={styles.center}>
      <GameHistory />
    </div>
  </>
)
