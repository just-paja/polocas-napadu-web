import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import GameInspiration from '../containers//GameInspiration';

import { Classes } from '../../proptypes';

const styles = {
};

const FinaleStage = ({ classes }) => (
  <div>
    Finale
  </div>
);

FinaleStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(FinaleStage);
