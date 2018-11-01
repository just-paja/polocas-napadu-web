import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const DEFAULT_LOGO = '/default-logo.png';

const styles = {
  name: {
    fontSize: '3rem',
  },
  logo: {
    maxWidth: '66%',
  },
};

const Team = ({ classes, team }) => (
  <div>
    <h1 className={classes.name}>{team.name}</h1>
    <img
      className={classes.logo}
      src={team.logo || DEFAULT_LOGO}
      alt="Team logo"
    />
  </div>
);

Team.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
};

export default withStyles(styles)(Team);
