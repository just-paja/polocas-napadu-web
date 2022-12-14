import React from 'react'

import { BoardLayout } from './BoardLayout.mjs'
import { ControlsLayout } from './ControlsLayout.mjs'
import { MainControls } from './MainControls.mjs'
import { Team } from './Team.mjs'
import {
  TEAM_SIDE_LEFT,
  TEAM_SIDE_RIGHT,
} from '@polocas-napadu/core/constants.mjs'

export const ShowSetupStage = () => (
  <ControlsLayout>
    <BoardLayout>
      <Team side={TEAM_SIDE_LEFT} />
      <Team side={TEAM_SIDE_RIGHT} />
    </BoardLayout>
    <MainControls center>
      <h1>Příprava zápasu</h1>
      <p>
        Na hlavní obrazovce je vidět QR kód s odkazem na zadání témat. Čekáme na
        příchod sportovních komentátorů nebo konferenciéra.
      </p>
    </MainControls>
  </ControlsLayout>
)
