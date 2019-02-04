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
      preparedInspirationCount,
      show {
        name,
        start,
      },
      contestantGroups {
        id,
        contestantType,
        score,
        color,
        logo,
        penaltyPoints,
        band {
          name,
        }
      },
      currentStage {
        created,
        type,
        game {
          type,
          inspirations {
            id,
            text,
          },
          rules {
            id,
            name,
          },
        },
        inspirations {
          id,
          text,
        }
      },
      prevStage {
        type
      },
    }
  }
`;

const getStageView = (stage) => {
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
  GET_MATCH,
  true
);
