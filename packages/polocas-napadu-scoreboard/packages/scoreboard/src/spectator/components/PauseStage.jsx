import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import GameHistory from './GameHistory';
import Teams from './Teams';

import { Classes } from '../../proptypes';

const styles = {
  text: {
    fontSize: '3rem',
    textAlign: 'center',
    color: 'white',
  },
  center: {
    justifyContent: 'center',
    display: 'flex',
  },
};

const PauseStage = ({ classes }) => (
  <div>
    <Teams />
    <p className={classes.text}>V první půlce jste viděli</p>
    <div className={classes.center}>
      <GameHistory />
    </div>
  </div>
);

PauseStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(PauseStage);
