import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import GameSetupStage from './GameSetupStage';
import GameStage from './GameStage';
import GameResultsStage from './GameResultsStage';
import PauseStage from './PauseStage';
import ShowSetupStage from './ShowSetupStage';

import { Classes } from '../../proptypes';

import * as constants from '../../board/constants';

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
    left: 0,
    minHeight: 300,
    padding: '5%',
    position: 0,
    right: 0,
    top: 0,
  },
};

const getStageView = (stage) => {
  if (stage === constants.STAGE_PAUSE) {
    return <PauseStage />;
  }
  if (stage === constants.STAGE_GAME_RESULTS) {
    return <GameResultsStage />;
  }
  if (stage === constants.STAGE_GAME) {
    return <GameStage />;
  }
  if (stage === constants.STAGE_GAME_SETUP) {
    return <GameSetupStage />;
  }
  return <ShowSetupStage />;
};

const SpectatorView = ({ classes, stage }) => (
  <div className={classes.spectatorView}>
    <div className={classes.board}>
      {getStageView(stage)}
    </div>
  </div>
);

SpectatorView.propTypes = {
  classes: Classes.isRequired,
  stage: PropTypes.string.isRequired,
};

export default withStyles(styles)(SpectatorView);
