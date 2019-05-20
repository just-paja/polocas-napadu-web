import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const formatter = new Intl.NumberFormat();

export const DecibelLevel = ({ classes, maximum, result, value }) => (
  <Typography
    color="secondary"
    variant="subtitle1"
  >
    {formatter.format(value)} dB
  </Typography>
);

DecibelLevel.propTypes = {
  maximum: PropTypes.bool,
  result: PropTypes.bool,
  value: PropTypes.number.isRequired,
};

DecibelLevel.defaultProps = {
  maximum: false,
  result: false,
};
