import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const formatter = new Intl.NumberFormat();

export const DecibelLevel = ({ label, maximum, result, value }) => (
  <Typography
    color="secondary"
    variant="body1"
  >
    {label}:{' '}
    {value ? formatter.format(value) : 0} dB
  </Typography>
);

DecibelLevel.propTypes = {
  label: PropTypes.string.isRequired,
  maximum: PropTypes.bool,
  result: PropTypes.bool,
  value: PropTypes.number,
};

DecibelLevel.defaultProps = {
  maximum: false,
  result: false,
  value: 0,
};
