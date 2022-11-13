import React from 'react'
import styles from './ShowStageControls.module.scss'

import { ShowProgress } from './ShowProgress.mjs'
import { ShowStageControl } from './ShowStageControl.mjs'
import { ShowStageMenu } from './ShowStageMenu.mjs'
import { useMatch } from 'polocas-napadu-core/context.mjs'
import {
  STAGE_FINALE,
  STAGE_GAME_RESULTS,
  STAGE_GAME_SETUP,
  STAGE_GAME,
  STAGE_INTRO,
  STAGE_PAUSE,
  STAGE_SHOW_SETUP,
} from 'polocas-napadu-core/constants.mjs'

const STAGE_MAP = {
  [STAGE_FINALE]: [],
  [STAGE_GAME_RESULTS]: [STAGE_GAME_SETUP],
  [STAGE_GAME_SETUP]: [STAGE_GAME],
  [STAGE_GAME]: [STAGE_GAME_RESULTS],
  [STAGE_INTRO]: [STAGE_GAME_SETUP],
  [STAGE_PAUSE]: [STAGE_GAME_SETUP],
  [STAGE_SHOW_SETUP]: [STAGE_INTRO],
}

export const ShowStageControls = () => {
  const { closed, currentStage, prevStage } = useMatch()

  const getForwardButtons = () => {
    const forward = currentStage
      ? STAGE_MAP[currentStage.type]
      : STAGE_MAP[STAGE_SHOW_SETUP]
    return forward || []
  }

  const renderControls = () => {
    const forward = getForwardButtons()
    return (
      <>
        {currentStage ? (
          <ShowProgress side="left">
            <ShowStageControl
              back
              stage={prevStage ? prevStage.type : STAGE_SHOW_SETUP}
            />
          </ShowProgress>
        ) : null}
        <ShowProgress side="right">
          <ShowStageControl
            forward={forward}
            component={ShowStageMenu}
            omit={[currentStage && currentStage.type, ...forward]}
          />
        </ShowProgress>
      </>
    )
  }

  return (
    <div className={styles.box}>
      {closed ? (
        <p className={styles.closed}>Zápas je uzavřen</p>
      ) : (
        renderControls()
      )}
    </div>
  )
}
