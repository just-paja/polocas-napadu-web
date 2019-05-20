import GameInspiration from './GameInspiration';
import React from 'react';
import Teams from './Teams';

import { Stage } from './Stage';

class GameSetupStage extends Stage {
  render() {
    return (
      <div>
        <Teams />
        <GameInspiration />
      </div>
    );
  }
}

export default GameSetupStage;
