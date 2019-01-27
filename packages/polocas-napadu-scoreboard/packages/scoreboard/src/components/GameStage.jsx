import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import GameInspiration from './GameInspiration';

import { Classes } from '../proptypes';

const styles = {
};

const GameStage = ({ classes }) => (
  <div>
    <GameInspiration />
  </div>
);

GameStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(GameStage);
