import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Classes } from '../../proptypes';

const styles = {
};

const PauseStage = ({ classes }) => (
  <div>
    Pauza
  </div>
);

PauseStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(PauseStage);
