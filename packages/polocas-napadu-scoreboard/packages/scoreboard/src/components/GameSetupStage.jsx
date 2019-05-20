import GameInspiration from './GameInspiration';
import React from 'react';
import Teams from './Teams';

import { Stage } from './Stage';

class GameSetupStage extends Stage {
  render() {
    return (
      <React.Fragment>
        <Teams />
        <GameInspiration />
      </React.Fragment>
    );
  }
}

export default GameSetupStage;
