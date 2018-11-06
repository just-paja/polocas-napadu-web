import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import TeamDetails from '../containers/TeamDetails';

import { SplitView } from '../../board/components';
import { Classes } from '../../proptypes';

const styles = {
  split: {
    width: '100%',
  },
};

const Score = ({ classes }) => (
  <SplitView className={classes.split}>
    <TeamDetails side="left" />
    <TeamDetails side="right" />
  </SplitView>
);

Score.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(Score);
