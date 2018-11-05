import Button from '@material-ui/core/Button';
import React from 'react';
import PropTypes from 'prop-types';
import EditTeamButton from '../containers/EditTeamButton';

import { withStyles } from '@material-ui/core/styles';
import { Classes } from '../../proptypes';

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
  onPenaltyDecrease,
  onPenaltyIncrease,
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
      <h1>{team.name} ({team.score}, {team.penalties})</h1>
    </div>
    <div>
      <Button onClick={onScoreIncrease}>
        +1 Score
      </Button>
      <Button onClick={onScoreDecrease} disabled={team.score === 0}>
        -1 Score
      </Button>
    </div>
    <div>
      <Button onClick={onPenaltyIncrease}>
        +1 Penalty
      </Button>
      <Button onClick={onPenaltyDecrease} disabled={team.penalties === 0}>
        -1 Penalty
      </Button>
    </div>
    <EditTeamButton teamId={teamId} />
  </div>
);

TeamSummary.propTypes = {
  classes: Classes.isRequired,
  team: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(TeamSummary);
