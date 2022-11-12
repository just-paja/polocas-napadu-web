import React from 'react'
import styles from './FinaleStage.module.scss'

import { Teams } from './Teams.mjs'
import { GameHistory } from './GameHistory.mjs'

export const FinaleStage = () => (
  <div>
    <Teams />
    <p className={styles.text}>Děkujeme, přijďte zas!</p>
    <div className={styles.center}>
      <GameHistory />
    </div>
    <p className={styles.text}>www.polocas-napadu.cz</p>
  </div>
)
