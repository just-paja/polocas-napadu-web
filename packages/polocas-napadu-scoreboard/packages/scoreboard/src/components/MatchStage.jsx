import React from 'react'

import { gql } from 'apollo-boost'
import { MatchContext } from 'core/context'
import {
  STAGE_FINALE,
  STAGE_GAME_RESULTS,
  STAGE_GAME_SETUP,
  STAGE_GAME,
  STAGE_INTRO,
  STAGE_PAUSE
} from 'core/constants'

import FinaleStage from './FinaleStage'
import GameResultsStage from './GameResultsStage'
import GameSetupStage from './GameSetupStage'
import GameStage from './GameStage'
import GraphContainer from './GraphContainer'
import IntroStage from './IntroStage'
import PauseStage from './PauseStage'
import ShowSetupStage from './ShowSetupStage'

const GET_MATCH_STAGE = gql`
  query Stage($matchId: Int!) {
    match(id: $matchId) {
      contestantGroups {
        id,
        contestantType,
        score,
        color,
        penaltyPoints,
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
            text,
          }
        },
        scorePointPoll {
          id,
          closed,
          votings {
            id,
            closed,
            contestantGroup {
              id,
              color,
              band {
                name,
              }
            },
            volumeScrapes {
              created,
              volume,
            }
          }
        },
        inspirations {
          text,
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
      return <FinaleStage />
    }
    if (stage.type === STAGE_INTRO) {
      return <IntroStage />
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

export default GraphContainer(
  MatchStage,
  GET_MATCH_STAGE,
  true
)
