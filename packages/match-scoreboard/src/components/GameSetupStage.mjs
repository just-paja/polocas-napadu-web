import React from 'react'

import { GameInspiration } from './GameInspiration.mjs'
import { Teams } from './Teams.mjs'

export const GameSetupStage = () => (
  <>
    <Teams />
    <GameInspiration />
  </>
)
