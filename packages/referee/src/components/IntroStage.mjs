import React from 'react'

import { BoardLayout } from './BoardLayout.mjs'
import { ControlsLayout } from './ControlsLayout.mjs'
import { MainControls } from './MainControls.mjs'
import { Team } from './Team.mjs'
import {
  TEAM_SIDE_LEFT,
  TEAM_SIDE_RIGHT,
} from '@polocas-napadu/core/constants.mjs'

export const IntroStage = () => (
  <ControlsLayout>
    <BoardLayout layout="horizontal">
      <Team side={TEAM_SIDE_LEFT} />
      <Team side={TEAM_SIDE_RIGHT} />
    </BoardLayout>
    <MainControls center>
      <h1>Intro</h1>
      <p>
        Během intra sportovní komentátoři udělají prognózu zápasu a poté probíhá
        veřejná rozcvička.
      </p>
    </MainControls>
  </ControlsLayout>
)
