import GameVote from './GameVote';
import React from 'react';
import Teams from './Teams';

class GameResultsStage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Teams />
        <GameVote />
      </React.Fragment>
    );
  }
}

export default GameResultsStage;
