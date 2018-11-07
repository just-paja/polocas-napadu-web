import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Teams from './Teams';
import GameInspiration from '../containers/GameInspiration';

import { Classes } from '../../proptypes';

const styles = {
};

const GameResultsStage = ({ classes }) => (
  <div>
    <Teams />
    <GameInspiration />
  </div>
);

GameResultsStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(GameResultsStage);
