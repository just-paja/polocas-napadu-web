import React from 'react';

import { Classes } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';

import Teams from './Teams';
import GameInspiration from './GameInspiration';


const styles = {
};

const GameSetupStage = ({ classes }) => (
  <div>
    <Teams />
    <GameInspiration />
  </div>
);

GameSetupStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(GameSetupStage);
