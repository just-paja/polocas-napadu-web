import GameInspiration from './GameInspiration'
import React from 'react'
import Teams from './Teams'

import { Stage } from './Stage'

class GameSetupStage extends Stage {
  render () {
    return (
      <>
        <Teams />
        <GameInspiration />
      </>
    )
  }
}

export default GameSetupStage
