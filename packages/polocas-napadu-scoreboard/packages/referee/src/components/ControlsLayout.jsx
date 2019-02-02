import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import BoardLayout from './BoardLayout';
import ShowStageControls from './ShowStageControls';

const styles = theme => ({
});

const ControlsLayout = ({ children, classes }) => (
  <BoardLayout layout="vertical">
    {children}
    <ShowStageControls />
  </BoardLayout>
);

export default withStyles(styles)(ControlsLayout);
