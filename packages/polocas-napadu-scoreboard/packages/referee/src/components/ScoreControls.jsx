import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import React from 'react';

import { Classes } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 3,
  }
});

const ScoreControls = ({ classes }) => (
  <div className={classes.box}>
    <IconButton>
      <Add />
    </IconButton>
    <IconButton>
      <Remove />
    </IconButton>
  </div>
);

ScoreControls.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(ScoreControls);
