import React from 'react';

import { Classes } from 'core/proptypes';
import { Stage } from './Stage';
import { withStyles } from '@material-ui/core/styles';

import GameHistory from './GameHistory';
import Teams from './Teams';

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

class PauseStage extends Stage {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Teams />
        <p className={classes.text}>V první půlce jste viděli</p>
        <div className={classes.center}>
          <GameHistory />
        </div>
      </div>
    );
  }
}

PauseStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(PauseStage);
