import PropTypes from 'prop-types';
import React from 'react';

import { DecibelLevel } from './DecibelLevel';

export const DecibelMeterValues = ({ classes, current, result }) =>(
  <div>
    <DecibelLevel label="Aktuálně" value={current} />
    <DecibelLevel label="Průměr" value={result} />
  </div>
);

DecibelMeterValues.propTypes = {
  current: PropTypes.number,
  result: PropTypes.number,
};

DecibelMeterValues.defaultProps = {
  current: null,
  result: null,
};
