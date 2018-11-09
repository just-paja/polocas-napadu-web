import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Teams from './Teams';
import InspirationCount from '../containers/InspirationCount';

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

const ShowSetupStage = ({ classes }) => (
  <div>
    <Teams hideScore />
    <div className={classes.inspiration}>
      <img
        src="/qr-inspiration.png"
        alt="invite"
        className={classes.qr}
      />
    </div>
    <InspirationCount />
  </div>
);

ShowSetupStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(ShowSetupStage);
