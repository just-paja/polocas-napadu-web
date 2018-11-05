import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import FlipSidesButton from '../containers/FlipSidesButton';
import OpenSpectatorWindowButton from '../../spectator/containers/OpenSpectatorWindowButton';
import Team from '../containers/Team';

import { SplitView } from '../../board/components';

const styles = {
};

const MonitorView = ({ classes, sides }) => (
  <div>
    <SplitView>
      <Team side="left" />
      <Team side="right" />
    </SplitView>
    <FlipSidesButton />
    <OpenSpectatorWindowButton />
  </div>
);

MonitorView.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  sides: PropTypes.shape({
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(MonitorView);
