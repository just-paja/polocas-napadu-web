import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  inspiration: {
    color: 'white',
    fontSize: '3rem',
    textAlign: 'center',
  },
};

const InspirationCount = ({ classes, count }) => (
  <p className={classes.inspiration}>
    Celkem témat: {count}
  </p>
);

InspirationCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default withStyles(styles)(InspirationCount);
