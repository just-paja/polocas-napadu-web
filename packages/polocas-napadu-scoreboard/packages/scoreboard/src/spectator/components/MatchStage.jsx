import React from 'react';

import { gql } from 'apollo-boost';
import { withStyles } from '@material-ui/core/styles';

import GraphContainer from '../../components/GraphContainer';

import FinaleStage from './FinaleStage';
import GameSetupStage from './GameSetupStage';
import GameStage from './GameStage';
import GameResultsStage from './GameResultsStage';
import PauseStage from './PauseStage';
import ShowSetupStage from './ShowSetupStage';

import { Classes } from '../../proptypes';
import {
  STAGE_FINALE,
  STAGE_GAME_RESULTS,
  STAGE_GAME_SETUP,
  STAGE_GAME,
  STAGE_PAUSE,
} from '../../constants';

const styles = {
};

const GET_MATCH_STAGE = gql`
  query Stage($matchId: Int!) {
    match(id: $matchId) {
      currentStage {
        type
      }
    }
  }
`

const getStageView = (stage) => {
  if (stage) {
    if (stage.type === STAGE_FINALE) {
      return <FinaleStage />;
    }
    if (stage.type === STAGE_PAUSE) {
      return <PauseStage />;
    }
    if (stage.type === STAGE_GAME_RESULTS) {
      return <GameResultsStage />;
    }
    if (stage.type === STAGE_GAME) {
      return <GameStage />;
    }
    if (stage.type === STAGE_GAME_SETUP) {
      return <GameSetupStage />;
    }
  }
  return <ShowSetupStage />;
};
// {getStageView(stage)}

const MatchStage = ({ classes, data }) => (
  <div>
    {getStageView(data.match.currentStage)}
  </div>
);

MatchStage.propTypes = {
  classes: Classes.isRequired,
};

export default GraphContainer(
  withStyles(styles)(MatchStage),
  GET_MATCH_STAGE,
  true,
);
