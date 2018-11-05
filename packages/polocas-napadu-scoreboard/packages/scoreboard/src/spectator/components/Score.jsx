import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  scoreBar: {
    fontSize: '6rem',
  },
};

const Score = ({ classes, scoreLeft, scoreRight }) => {
  return (
    <div className={classes.scoreBar}>
      {scoreLeft}
      :
      {scoreRight}
    </div>
  );
};

Score.propTypes = {
  name: PropTypes.string,
  side: PropTypes.string,
  logo: PropTypes.string,
};

export default withStyles(styles)(Score);
