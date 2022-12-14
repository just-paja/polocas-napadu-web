import React from 'react'

import { Heading } from '@polocas-napadu/ui/content.mjs'
import { BoardLayout } from './BoardLayout.mjs'
import { ControlsLayout } from './ControlsLayout.mjs'
import { GameSelection } from './GameSelection.mjs'
import { InspirationSelection } from './InspirationSelection.mjs'
import { MainControls } from './MainControls.mjs'
import { Team } from './Team.mjs'
import { gql, useMutation } from '@apollo/client'
import { useMatch } from '@polocas-napadu/core/context.mjs'
import {
  TEAM_SIDE_LEFT,
  TEAM_SIDE_RIGHT,
} from '@polocas-napadu/core/constants.mjs'

const SET_GAME = gql`
  mutation SetMatchGame($matchId: Int!, $gameRulesId: Int) {
    setMatchGame(matchId: $matchId, gameRulesId: $gameRulesId) {
      ok
    }
  }
`

export const GameSetupStage = () => {
  const [setGame, { loading }] = useMutation(SET_GAME)
  const match = useMatch()
  const handleChange = value =>
    setGame({
      refetchQueries: ['MatchStage'],
      variables: {
        gameRulesId: value ? value.id : null,
        matchId: match.id,
      },
    })

  return (
    <ControlsLayout>
      <BoardLayout>
        <Team side={TEAM_SIDE_LEFT} />
        <Team side={TEAM_SIDE_RIGHT} />
      </BoardLayout>
      <MainControls center>
        <h1>Nastavení kategorie</h1>
        <p>Rozhodčí určuje jaká kategorie se bude hrát a vybírá téma</p>

        {match.closed ? null : (
          <>
            <GameSelection
              onChange={handleChange}
              saving={loading}
              value={match.currentStage.game && match.currentStage.game.rules}
            />
            <Heading>Inspirace ({match.preparedInspirationCount})</Heading>
            <InspirationSelection />
          </>
        )}
      </MainControls>
    </ControlsLayout>
  )
}
