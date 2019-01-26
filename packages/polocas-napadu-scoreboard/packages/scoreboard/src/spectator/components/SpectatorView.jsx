import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import MatchStage from './MatchStage';

import { Classes } from '../../proptypes';
import { RouterContext } from '../../context';

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
    left: 0,
    minHeight: 300,
    padding: '5%',
    position: 0,
    right: 0,
    top: 0,
  },
};

const SpectatorView = ({ classes, match }) => (
  <div className={classes.spectatorView}>
    <div className={classes.board}>
      <RouterContext.Provider value={match.params}>
        <MatchStage />
      </RouterContext.Provider>
    </div>
  </div>
);

SpectatorView.propTypes = {
  classes: Classes.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      matchId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStyles(styles)(SpectatorView);
