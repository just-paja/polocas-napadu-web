import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import TeamGuest from '../containers/TeamGuest';
import TeamHome from '../containers/TeamHome';

import * as constants from '../../board/constants';

const styles = {
  spectatorView: {
    alignItems: 'center',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    padding: '5%',
  },
  team: {
    textAlign: 'center',
    width: '50%',
  },
};

const getTeam = team => (
  team === constants.TEAM_HOME
    ? <TeamHome />
    : <TeamGuest />
);

const SpectatorView = ({ classes, sides }) => (
  <div className={classes.spectatorView}>
    <div className={classes.team}>
      {getTeam(sides.left)}
    </div>
    <div className={classes.team}>
      {getTeam(sides.right)}
    </div>
  </div>
);

SpectatorView.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
};

export default withStyles(styles)(SpectatorView);
