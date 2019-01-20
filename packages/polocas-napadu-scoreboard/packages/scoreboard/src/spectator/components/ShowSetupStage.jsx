import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Teams from './Teams';
import InspirationQr from './InspirationQr';

import { Classes } from '../../proptypes';

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


const ShowSetupStage = ({ classes, variables }) => (
  <div>
    <Teams hideScore variables={variables} />
    <div className={classes.inspiration}>
      <InspirationQr className={classes.qr} variables={variables} />
    </div>
    InspirationCount
  </div>
);

ShowSetupStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(ShowSetupStage);
