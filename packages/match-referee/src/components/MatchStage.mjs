import React from 'react'

import { FinaleStage } from './FinaleStage.mjs'
import { GameResultsStage } from './GameResultsStage.mjs'
import { GameSetupStage } from './GameSetupStage.mjs'
import { GameStage } from './GameStage.mjs'
import { gql } from '@apollo/client'
import { IntroStage } from './IntroStage.mjs'
import { MatchContext } from 'polocas-napadu-core/context.mjs'
import { PauseStage } from './PauseStage.mjs'
import { ShowSetupStage } from './ShowSetupStage.mjs'
import { withQuery } from 'polocas-napadu-ui/apollo.mjs'
import {
  STAGE_FINALE,
  STAGE_GAME_RESULTS,
  STAGE_GAME_SETUP,
  STAGE_GAME,
  STAGE_INTRO,
  STAGE_PAUSE,
} from 'polocas-napadu-core/constants.mjs'

const GET_MATCH = gql`
  query MatchStage($matchId: Int!) {
    match(id: $matchId) {
      id
      preparedInspirationCount
      show {
        name
        start
      }
      closed
      contestantGroups {
        id
        contestantType
        score
        color
        logo
        scorePoints
        penaltyPoints
        band {
          name
        }
        players {
          id
          profile {
            name
          }
        }
      }
      currentStage {
        id
        created
        type
        game {
          type
          inspirations {
            id
            text
          }
          rules {
            id
            name
          }
        }
        inspirations {
          id
          text
        }
      }
      prevStage {
        type
      }
    }
  }
`

const getStageView = stage => {
  if (stage) {
    if (stage.type === STAGE_INTRO) {
      return <IntroStage />
    }
    if (stage.type === STAGE_FINALE) {
      return <FinaleStage />
    }
    if (stage.type === STAGE_PAUSE) {
      return <PauseStage />
    }
    if (stage.type === STAGE_GAME_RESULTS) {
      return <GameResultsStage />
    }
    if (stage.type === STAGE_GAME) {
      return <GameStage />
    }
    if (stage.type === STAGE_GAME_SETUP) {
      return <GameSetupStage />
    }
  }
  return <ShowSetupStage />
}

export const MatchStage = withQuery(
  ({ data }) => (
    <MatchContext.Provider value={data.match}>
      {getStageView(data.match.currentStage)}
    </MatchContext.Provider>
  ),
  GET_MATCH,
  true
)
