import React from 'react'
import moment from 'moment'

import { BoardLayout } from './BoardLayout.mjs'
import { ControlsLayout } from './ControlsLayout.mjs'
import { InspirationList } from './InspirationList.mjs'
import { MainControls } from './MainControls.mjs'
import { Team } from './Team.mjs'
import { Timer } from './Timer.mjs'
import { useMatch } from 'polocas-napadu-core/context.mjs'
import {
  TEAM_SIDE_LEFT,
  TEAM_SIDE_RIGHT,
} from 'polocas-napadu-core/constants.mjs'

export const GameStage = () => {
  const { currentStage } = useMatch()
  return (
    <ControlsLayout>
      <BoardLayout>
        <Team side={TEAM_SIDE_LEFT} />
        <Team side={TEAM_SIDE_RIGHT} />
      </BoardLayout>
      <MainControls center>
        <p>Právě probíhá kategorie</p>
        <h1>{currentStage.game.rules.name}</h1>
        <Timer start={currentStage.created} />
        <InspirationList
          inspirations={currentStage.game.inspirations}
          readOnly
        />
      </MainControls>
    </ControlsLayout>
  )
}
