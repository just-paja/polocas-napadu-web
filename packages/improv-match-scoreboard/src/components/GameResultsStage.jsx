import GameInspiration from './GameInspiration'
import React from 'react'
import Teams from './Teams'

class GameResultsStage extends React.Component {
  render () {
    return (
      <>
        <Teams />
        <GameInspiration />
      </>
    )
  }
}

export default GameResultsStage
