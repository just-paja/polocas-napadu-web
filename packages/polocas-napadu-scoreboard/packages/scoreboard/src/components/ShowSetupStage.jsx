import React from 'react';

import { Classes } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';

import InspirationCount from './InspirationCount';
import InspirationQr from './InspirationQr';
import Teams from './Teams';

const styles = {
  inspiration: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  qr: {
    width: 400,
  },
};

const ShowSetupStage = ({ classes }) => (
  <div>
    <Teams hideScore />
    <div className={classes.inspiration}>
      <InspirationQr className={classes.qr} />
    </div>
    <InspirationCount />
  </div>
);

ShowSetupStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(ShowSetupStage);
