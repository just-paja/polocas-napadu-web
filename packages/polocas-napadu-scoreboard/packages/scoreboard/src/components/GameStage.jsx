import React from 'react';

import { Classes } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';

import GameInspiration from './GameInspiration';


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
