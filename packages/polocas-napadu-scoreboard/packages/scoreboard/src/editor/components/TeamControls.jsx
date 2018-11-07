import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Team from '../containers/Team';

import { Classes } from '../../proptypes';

const styles = theme => ({
  teams: {
    maxWidth: 800,
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  },
  team: {
    background: theme.palette.background.default,
    flexGrow: 1,
    margin: '1rem',
    padding: '1rem 2rem',
  },
});

const TeamControls = ({ classes, sides }) => (
  <div className={classes.teams}>
    <div className={classes.team}>
      <Team side="left" />
    </div>
    <div className={classes.team}>
      <Team side="right" />
    </div>
  </div>
);

TeamControls.propTypes = {
  classes: Classes.isRequired,
  sides: PropTypes.shape({
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(TeamControls);
