import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Score from './Score';

import { Classes } from '../../proptypes';

const styles = {
  spectatorView: {
    alignItems: 'center',
    background: 'black',
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
  },
  board: {
    bottom: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    left: 0,
    minHeight: 300,
    padding: '5%',
    position: 0,
    right: 0,
    top: 0,
  },
};

const SpectatorView = ({ classes }) => (
  <div className={classes.spectatorView}>
    <div className={classes.board}>
      <Score />
    </div>
  </div>
);

SpectatorView.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(SpectatorView);
