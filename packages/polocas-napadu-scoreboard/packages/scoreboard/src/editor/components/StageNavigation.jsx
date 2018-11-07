import PropTypes from 'prop-types';
import React from 'react';

import StageChangeButton from '../containers/StageChangeButton';

const StageNavigation = ({ availableStages, heading }) => {
  if (availableStages.length === 0) {
    return null;
  }
  return (
    <div>
      <h2>{heading}</h2>
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
