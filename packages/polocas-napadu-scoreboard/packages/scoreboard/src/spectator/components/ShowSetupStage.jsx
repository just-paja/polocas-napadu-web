import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Teams from './Teams';

import { Classes } from '../../proptypes';

const styles = {
};

const ShowSetupStage = ({ classes }) => (
  <div>
    <Teams hideScore />
  </div>
);

ShowSetupStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(ShowSetupStage);
