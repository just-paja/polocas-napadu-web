import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import TeamSummary from '../containers/TeamSummary';

import * as constants from '../../board/constants';

const styles = {
};

const TeamsSummary = ({ classes, sides }) => (
  <div className={classes.editTeams}>
    <div className={classes.team}>
      <TeamSummary side={constants.TEAM_LEFT} />
    </div>
    <div className={classes.team}>
      <TeamSummary side={constants.TEAM_RIGHT} />
    </div>
  </div>
);

TeamsSummary.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  sides: PropTypes.shape({
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(TeamsSummary);
