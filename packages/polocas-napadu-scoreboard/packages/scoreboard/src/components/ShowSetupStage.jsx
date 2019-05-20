import React from 'react';

import { Classes } from 'core/proptypes';
import { Stage } from './Stage';
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

class ShowSetupStage extends Stage {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Teams hideScore />
        <div className={classes.inspiration}>
          <InspirationQr className={classes.qr} />
        </div>
        <InspirationCount />
      </React.Fragment>
    );
  }
}

ShowSetupStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(ShowSetupStage);
