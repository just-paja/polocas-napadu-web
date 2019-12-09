import GameVote from './GameVote'
import React from 'react'
import Teams from './Teams'

class GameResultsStage extends React.Component {
  render () {
    return (
      <>
        <Teams />
        <GameVote />
      </>
    )
  }
}

export default GameResultsStage
