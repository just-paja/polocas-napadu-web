import FinaleStage from './FinaleStage'
import GameResultsStage from './GameResultsStage'
import GameSetupStage from './GameSetupStage'
import GameStage from './GameStage'
import GraphContainer from './GraphContainer'
import IntroStage from './IntroStage'
import PauseStage from './PauseStage'
import React from 'react'
import ShowSetupStage from './ShowSetupStage'

import { MatchContext } from 'polocas-napadu-core/context'
import { gql } from 'apollo-boost'
import {
  STAGE_FINALE,
  STAGE_GAME_RESULTS,
  STAGE_GAME_SETUP,
  STAGE_GAME,
  STAGE_INTRO,
  STAGE_PAUSE
} from 'polocas-napadu-core/constants'

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

const MatchStage = ({ data }) => (
  <MatchContext.Provider value={data}>
    {getStageView(data.match.currentStage)}
  </MatchContext.Provider>
)

export default GraphContainer(MatchStage, GET_MATCH, true)
