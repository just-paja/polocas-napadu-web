import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import FlipSidesButton from '../containers/FlipSidesButton';
import OpenSpectatorWindowButton from '../../spectator/containers/OpenSpectatorWindowButton';
import TeamGuestForm from '../containers/TeamGuestForm';
import TeamHomeForm from '../containers/TeamHomeForm';

import * as constants from '../../board/constants';

const styles = {
  editTeams: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5%',
  },
  team: {
    width: '45%',
  },
};

const getForm = team => (
  team === constants.TEAM_HOME
    ? <TeamHomeForm />
    : <TeamGuestForm />
);

const MonitorView = ({ classes, sides }) => (
  <div>
    <div className={classes.editTeams}>
      <div className={classes.team}>
        {getForm(sides.left)}
      </div>
      <div className={classes.team}>
        {getForm(sides.right)}
      </div>
    </div>
    <FlipSidesButton />
    <OpenSpectatorWindowButton />
  </div>
);

MonitorView.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  sides: PropTypes.shape({
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(MonitorView);
