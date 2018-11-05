import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import TeamDetails from '../containers/TeamDetails';

import { SplitView } from '../../board/components';

const styles = {
  spectatorView: {
    alignItems: 'center',
    background: 'black',
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
  },
  board: {
    bottom: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    left: 0,
    minHeight: 300,
    padding: '5%',
    position: 0,
    right: 0,
    top: 0,
  },
  split: {
    width: '100%',
  },
};

const SpectatorView = ({ classes, sides }) => (
  <div className={classes.spectatorView}>
    <div className={classes.board}>
      <SplitView className={classes.split}>
        <TeamDetails side="left" />
        <TeamDetails side="right" />
      </SplitView>
    </div>
  </div>
);

SpectatorView.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
};

export default withStyles(styles)(SpectatorView);
