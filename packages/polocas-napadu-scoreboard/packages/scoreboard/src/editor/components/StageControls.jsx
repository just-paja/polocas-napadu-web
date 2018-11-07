import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import NextStages from '../containers/NextStages';
import PrevStages from '../containers/PrevStages';

import { Classes } from '../../proptypes';

const styles = theme => ({
  bg: {
    background: theme.palette.background.default,
  },
  controls: {
    maxWidth: 800,
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
    },
  },
  stageControl: {
    padding: '0 2rem 1rem',
  },
});

const StageControls = ({ classes }) => (
  <div className={classes.bg}>
    <div className={classes.controls}>
      <div className={classes.stageControl}>
        <NextStages heading="Advance" />
      </div>
      <div className={classes.stageControl}>
        <PrevStages heading="Move back" />
      </div>
    </div>
  </div>
);

StageControls.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(StageControls);
