import Button from '@material-ui/core/Button';
import React from 'react';
import PropTypes from 'prop-types';
import EditTeamButton from '../containers/EditTeamButton';

import { withStyles } from '@material-ui/core/styles';

import * as constants from '../../board/constants';

const styles = {
  logo: {
    marginRight: '1rem',
    maxHeight: '2rem',
  },
  team: {
  },
};

const TeamSummary = ({
  classes,
  onScoreDecrease,
  onScoreIncrease,
  team,
  teamId,
}) => (
  <div className={classes.team}>
    <div>
      <img
        alt=""
        className={classes.logo}
        src={team.logo || constants.TEAM_LOGO_DEFAULT}
      />
      <span>{team.name}</span>
    </div>
    <div>
      <Button onClick={onScoreIncrease}>
        +1 Score
      </Button>
    </div>
    <div>
      <Button onClick={onScoreDecrease}>
        -1 Score
      </Button>
    </div>
    <EditTeamButton teamId={teamId} />
  </div>
);

TeamSummary.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  team: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(TeamSummary);
