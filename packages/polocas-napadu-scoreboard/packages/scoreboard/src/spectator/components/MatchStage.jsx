import PropTypes from 'prop-types';
import React from 'react';

import { gql } from 'apollo-boost';
import { withStyles } from '@material-ui/core/styles';

import GraphContainer from '../../components/GraphContainer';

// import FinaleStage from './FinaleStage';
// import GameSetupStage from './GameSetupStage';
// import GameStage from './GameStage';
// import GameResultsStage from './GameResultsStage';
// import PauseStage from './PauseStage';
import ShowSetupStage from './ShowSetupStage';

import { Classes } from '../../proptypes';

import * as constants from '../../board/constants';

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

const getStageView = (stage, variables) => {
  if (!stage) {
    return <ShowSetupStage variables={variables} />;
  }
  // if (stage === constants.STAGE_FINALE) {
  //   return <FinaleStage />;
  // }
  // if (stage === constants.STAGE_PAUSE) {
  //   return <PauseStage />;
  // }
  // if (stage === constants.STAGE_GAME_RESULTS) {
  //   return <GameResultsStage />;
  // }
  // if (stage === constants.STAGE_GAME) {
  //   return <GameStage />;
  // }
  // if (stage === constants.STAGE_GAME_SETUP) {
  //   return <GameSetupStage />;
  // }
  // return <ShowSetupStage />;
  return null;
};
// {getStageView(stage)}

const SpectatorView = ({ classes, data, variables }) => (
  <div>
    {getStageView(data.match.stage, variables)}
  </div>
);

SpectatorView.propTypes = {
  classes: Classes.isRequired,
  stage: PropTypes.string.isRequired,
};

export default GraphContainer(
  withStyles(styles)(SpectatorView),
  GET_MATCH_STAGE,
);
