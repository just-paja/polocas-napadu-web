import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import FlipSidesButton from '../containers/FlipSidesButton';
import StageControls from './StageControls';
import Stage from '../containers/Stage';
import OpenSpectatorWindowButton from '../../spectator/containers/OpenSpectatorWindowButton';
import TeamControls from '../containers/TeamControls';
import GameSelection from '../containers/GameSelection';
import InspirationSource from '../containers/InspirationSource';

import { Classes } from '../../proptypes';

const styles = theme => ({
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
  },
});

const MonitorView = ({ classes }) => (
  <div>
    <Stage />
    <StageControls />
    <GameSelection />
    <TeamControls />
    <InspirationSource />
    <div className={classes.controls}>
      <FlipSidesButton />
      <OpenSpectatorWindowButton />
    </div>
  </div>
);

MonitorView.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(MonitorView);
