import React from 'react';

import { gql } from 'apollo-boost';
import { withStyles } from '@material-ui/core/styles';

import FinaleStage from './FinaleStage';
import GameResultsStage from './GameResultsStage';
import GameSetupStage from './GameSetupStage';
import GameStage from './GameStage';
import GraphContainer from './GraphContainer';
import PauseStage from './PauseStage';
import ShowSetupStage from './ShowSetupStage';

import { Classes } from '../proptypes';
import { MatchContext } from '../context';
import {
  STAGE_FINALE,
  STAGE_GAME_RESULTS,
  STAGE_GAME_SETUP,
  STAGE_GAME,
  STAGE_PAUSE,
} from '../constants';

const styles = {
};

const GET_MATCH_STAGE = gql`
  query Stage($matchId: Int!) {
    match(id: $matchId) {
      contestantGroups {
        contestantType,
        score,
        color,
        logo,
        band {
          name,
        }
      },
      currentStage {
        type,
        game {
          type,
          inspirations {
            text
          }
        }
      },
      show {
        totalInspirations,
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
    <MatchContext.Provider value={data}>
      {getStageView(data.match.currentStage)}
    </MatchContext.Provider>
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
