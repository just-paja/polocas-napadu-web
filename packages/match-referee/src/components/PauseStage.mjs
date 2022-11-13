import React from 'react'

import { BoardLayout } from './BoardLayout.mjs'
import { ControlsLayout } from './ControlsLayout.mjs'
import { MainControls } from './MainControls.mjs'
import { Team } from './Team.mjs'
import {
  TEAM_SIDE_LEFT,
  TEAM_SIDE_RIGHT,
} from 'polocas-napadu-core/constants.mjs'

export const PauseStage = () => (
  <ControlsLayout>
    <BoardLayout>
      <Team side={TEAM_SIDE_LEFT} />
      <Team side={TEAM_SIDE_RIGHT} />
    </BoardLayout>
    <MainControls center>
      <h1>Přestávka</h1>
    </MainControls>
  </ControlsLayout>
)
