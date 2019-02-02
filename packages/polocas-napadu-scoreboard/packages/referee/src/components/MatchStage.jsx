import React from 'react';

import { Classes } from 'core/proptypes';
import { MatchContext } from 'core/context';
import { gql } from 'apollo-boost';
import { withStyles } from '@material-ui/core/styles';
import {
  STAGE_FINALE,
  STAGE_GAME_RESULTS,
  STAGE_GAME_SETUP,
  STAGE_GAME,
  STAGE_INTRO,
  STAGE_PAUSE,
} from 'core/constants';

import FinaleStage from './FinaleStage';
import GameResultsStage from './GameResultsStage';
import GameSetupStage from './GameSetupStage';
import GameStage from './GameStage';
import GraphContainer from './GraphContainer';
import IntroStage from './IntroStage';
import PauseStage from './PauseStage';
import ShowSetupStage from './ShowSetupStage';

const styles = {
};

const GET_MATCH = gql`
  query MatchStage($matchId: Int!) {
    match(id: $matchId) {
      id,
      show {
        name,
        start,
      },
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
      }
    }
  }
`;

const getStageView = (stage) => {
  console.log(stage);
  if (stage) {
    if (stage.type === STAGE_INTRO) {
      return <IntroStage />;
    }
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

const MatchStage = ({ classes, data }) => (
  <MatchContext.Provider value={data}>
    {getStageView(data.match.currentStage)}
  </MatchContext.Provider>
);

MatchStage.propTypes = {
  classes: Classes.isRequired,
};

export default GraphContainer(
  withStyles(styles)(MatchStage),
  GET_MATCH
);
