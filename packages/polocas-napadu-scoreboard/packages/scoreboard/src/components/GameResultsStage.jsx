import GameVote from './GameVote';
import React from 'react';
import Teams from './Teams';

import { Stage } from './Stage';

class GameResultsStage extends Stage {
  render() {
    return (
      <div>
        <Teams />
        <GameVote />
      </div>
    );
  }
}

export default GameResultsStage;
