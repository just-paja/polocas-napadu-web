import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import StageChangeButton from '../containers/StageChangeButton';

const StageNavigation = ({
  availableStages,
  canAdvance,
  canMoveBackward,
  canMoveForward,
  heading,
  onBack,
  onForward,
}) => {
  if (canMoveBackward) {
    return (
      <Button variant="outlined" onClick={onBack}>
        Back
      </Button>
    );
  }
  if (canMoveForward) {
    return (
      <Button variant="outlined" onClick={onForward}>
        Forward
      </Button>
    );
  }
  if (availableStages.length === 0) {
    return null;
  }
  return (
    <div>
      <Typography variant="overline">{heading}</Typography>
      {availableStages.map(stage => (
        <StageChangeButton
          disabled={!canAdvance}
          key={stage}
          stage={stage}
        />
      ))}
    </div>
  );
};

StageNavigation.propTypes = {
  availableStages: PropTypes.arrayOf(PropTypes.string).isRequired,
  canAdvance: PropTypes.bool,
  canMoveBackward: PropTypes.bool,
  canMoveForward: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  onBack: PropTypes.func,
  onForward: PropTypes.func,
}

export default StageNavigation;
