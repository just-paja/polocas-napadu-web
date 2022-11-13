import React from 'react'

import { BoardLayout } from './BoardLayout.mjs'
import { ControlsLayout } from './ControlsLayout.mjs'
import { MainControls } from './MainControls.mjs'
import { ScoreControls } from './ScoreControls.mjs'
import { Team } from './Team.mjs'
import {
  TEAM_SIDE_LEFT,
  TEAM_SIDE_RIGHT,
} from 'polocas-napadu-core/constants.mjs'

export const GameResultsStage = () => (
  <ControlsLayout>
    <BoardLayout>
      <Team side={TEAM_SIDE_LEFT}>
        <ScoreControls side={TEAM_SIDE_LEFT} />
      </Team>
      <Team side={TEAM_SIDE_RIGHT}>
        <ScoreControls side={TEAM_SIDE_RIGHT} />
      </Team>
    </BoardLayout>
    <MainControls center>
      <h1>Hlasování</h1>
      <p>V této fázi hry diváci hlasují o tom který tým dostane bod.</p>
    </MainControls>
  </ControlsLayout>
)
