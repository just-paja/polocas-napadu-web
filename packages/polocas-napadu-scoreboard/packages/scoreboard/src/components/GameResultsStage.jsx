import React from 'react';

import { Classes } from 'core/proptypes';

import Teams from './Teams';
import GameInspiration from './GameInspiration';

const GameResultsStage = ({ classes }) => (
  <div>
    <Teams />
    <GameInspiration />
  </div>
);

GameResultsStage.propTypes = {
  classes: Classes.isRequired,
};

export default GameResultsStage;
