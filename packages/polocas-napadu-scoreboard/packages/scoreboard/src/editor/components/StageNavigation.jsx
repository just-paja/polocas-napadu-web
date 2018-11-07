import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import StageChangeButton from '../containers/StageChangeButton';

const StageNavigation = ({ availableStages, heading }) => {
  if (availableStages.length === 0) {
    return null;
  }
  return (
    <div>
      <Typography variant="overline">{heading}</Typography>
      {availableStages.map(stage => (
        <StageChangeButton stage={stage} key={stage} />
      ))}
    </div>
  );
};

StageNavigation.propTypes = {
  availableStages: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string.isRequired,
}

export default StageNavigation;
