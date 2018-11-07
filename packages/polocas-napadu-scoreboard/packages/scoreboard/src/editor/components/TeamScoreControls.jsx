import Button from '@material-ui/core/Button';
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Classes } from '../../proptypes';

const styles = {};

const TeamScoreControls = ({
  allowScoreChanges,
  classes,
  onPenaltyDecrease,
  onPenaltyIncrease,
  onScoreDecrease,
  onScoreIncrease,
  team,
}) => {
  if (!allowScoreChanges) {
    return null;
  }
  return (
    <div>
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
    </div>
  );
};

TeamScoreControls.propTypes = {
  allowScoreChanges: PropTypes.bool,
  classes: Classes.isRequired,
  team: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
  }).isRequired,
};

TeamScoreControls.defaultProps = {
  allowScoreChanges: false,
};

export default withStyles(styles)(TeamScoreControls);
