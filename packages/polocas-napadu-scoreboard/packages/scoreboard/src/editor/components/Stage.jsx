import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import { Classes } from '../../proptypes';

const styles = theme => ({
  bar: {
    background: theme.palette.background.default,
    textAlign: 'center',
    padding: '1rem 0 0',
  },
});

const Stage = ({ classes, stage }) => (
  <div className={classes.bar}>
    <Typography variant="overline">Show Stage</Typography>
    <Typography variant="display1">{stage.stage}</Typography>
  </div>
);

Stage.propTypes = {
  classes: Classes.isRequired,
  stage: PropTypes.shape({
    stage: PropTypes.string.isRequired,
  }),
};

export default withStyles(styles)(Stage);
