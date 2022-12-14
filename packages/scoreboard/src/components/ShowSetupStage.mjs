import React from 'react'
import styles from './ShowSetupStage.module.scss'

import { InspirationCount } from './InspirationCount.mjs'
import { InspirationQr } from './InspirationQr.mjs'
import { Teams } from './Teams.mjs'

export const ShowSetupStage = () => (
  <>
    <Teams hideScore />
    <div className="d-flex align-items-center justify-content-center">
      <InspirationQr className={styles.qr} />
    </div>
    <InspirationCount />
  </>
)
