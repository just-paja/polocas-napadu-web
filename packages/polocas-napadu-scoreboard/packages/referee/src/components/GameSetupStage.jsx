import React from 'react';

import { Classes } from 'core/proptypes';
import { gql } from 'apollo-boost';
import { MatchContext } from 'core/context';
import { Mutation } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import {
  TEAM_SIDE_LEFT,
  TEAM_SIDE_RIGHT,
} from 'core/constants';

import BoardLayout from './BoardLayout';
import ControlsLayout from './ControlsLayout';
import GameSelection from './GameSelection';
import InspirationSelection from './InspirationSelection';
import MainControls from './MainControls';
import Team from './Team';

const styles = theme => ({
  inspiration: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

const SET_GAME = gql`
  mutation SetMatchGame($matchId: Int!, $gameRulesId: Int) {
    setMatchGame(matchId: $matchId, gameRulesId: $gameRulesId) {
      ok,
    }
  }
`;

const GameSetupStage = ({ classes }) => (
  <ControlsLayout>
    <BoardLayout>
      <Team side={TEAM_SIDE_LEFT} />
      <Team side={TEAM_SIDE_RIGHT} />
    </BoardLayout>
    <MatchContext.Consumer>
      {data => (
        <MainControls>
          <h1>Nastavení kategorie</h1>
          <Mutation mutation={SET_GAME}>
            {(setGame, { error, loading }) => (
              <GameSelection
                onChange={(value) => setGame({
                  refetchQueries: ['MatchStage'],
                  variables: {
                    gameRulesId: value ? value.id : null,
                    matchId: data.match.id,
                  },
                })}
                value={data.match.currentStage.game && data.match.currentStage.game.rules}
              />
            )}
          </Mutation>
          <h2>Inspirace ({data.match.preparedInspirationCount})</h2>
          <InspirationSelection />
        </MainControls>
      )}
    </MatchContext.Consumer>
  </ControlsLayout>
);

GameSetupStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(GameSetupStage);
