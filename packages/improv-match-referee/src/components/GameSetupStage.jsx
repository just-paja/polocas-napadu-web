import BoardLayout from './BoardLayout'
import ControlsLayout from './ControlsLayout'
import GameSelection from './GameSelection'
import InspirationSelection from './InspirationSelection'
import MainControls from './MainControls'
import React from 'react'
import Team from './Team'

import { gql } from 'apollo-boost'
import { MatchContext } from 'polocas-napadu-core/context'
import { Mutation } from '@apollo/react-components'
import { TEAM_SIDE_LEFT, TEAM_SIDE_RIGHT } from 'polocas-napadu-core/constants'

const SET_GAME = gql`
  mutation SetMatchGame($matchId: Int!, $gameRulesId: Int) {
    setMatchGame(matchId: $matchId, gameRulesId: $gameRulesId) {
      ok
    }
  }
`

class GameSetupStage extends React.Component {
  render () {
    return (
      <ControlsLayout>
        <BoardLayout>
          <Team side={TEAM_SIDE_LEFT} />
          <Team side={TEAM_SIDE_RIGHT} />
        </BoardLayout>
        <MainControls center>
          <h1>Nastavení kategorie</h1>
          <p>Rozhodčí určuje jaká kategorie se bude hrát a vybírá téma</p>
          {this.context.match.closed ? null : (
            <>
              <Mutation mutation={SET_GAME}>
                {(setGame, { error, loading }) => (
                  <GameSelection
                    onChange={value =>
                      setGame({
                        refetchQueries: ['MatchStage'],
                        variables: {
                          gameRulesId: value ? value.id : null,
                          matchId: this.context.match.id
                        }
                      })
                    }
                    value={
                      this.context.match.currentStage.game &&
                      this.context.match.currentStage.game.rules
                    }
                  />
                )}
              </Mutation>
              <h2>Inspirace ({this.context.match.preparedInspirationCount})</h2>
              <InspirationSelection />
            </>
          )}
        </MainControls>
      </ControlsLayout>
    )
  }
}

GameSetupStage.contextType = MatchContext

export default GameSetupStage
