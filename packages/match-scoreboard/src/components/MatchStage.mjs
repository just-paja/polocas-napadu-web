import graphContainer from './GraphContainer.mjs'
import React from 'react'

import { gql } from '@apollo/client'
import { MatchContext } from 'polocas-napadu-core/context.mjs'
import {
  STAGE_FINALE,
  STAGE_GAME_RESULTS,
  STAGE_GAME_SETUP,
  STAGE_GAME,
  STAGE_INTRO,
  STAGE_PAUSE,
} from 'polocas-napadu-core/constants.mjs'

import { FinaleStage } from './FinaleStage.mjs'
import { GameResultsStage } from './GameResultsStage.mjs'
import { GameSetupStage } from './GameSetupStage.mjs'
import { GameStage } from './GameStage.mjs'
import { IntroStage } from './IntroStage.mjs'
import { PauseStage } from './PauseStage.mjs'
import { ShowSetupStage } from './ShowSetupStage.mjs'

const GET_MATCH_STAGE = gql`
  query Stage($matchId: Int!) {
    match(id: $matchId) {
      contestantGroups {
        id
        contestantType
        score
        color
        penaltyPoints
        logo
        band {
          name
        }
      }
      currentStage {
        type
        game {
          type
          inspirations {
            text
          }
        }
        scorePointPoll {
          id
          closed
          votings {
            id
            closed
            contestantGroup {
              id
              color
              band {
                name
              }
            }
            volumeScrapes {
              created
              volume
            }
          }
        }
        inspirations {
          text
        }
      }
      show {
        totalInspirations
      }
    }
  }
`

const getStageView = stage => {
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

export const MatchStage = graphContainer(
  ({ data }) => (
    <MatchContext.Provider value={data.match}>
      {getStageView(data.match.currentStage)}
    </MatchContext.Provider>
  ),
  GET_MATCH_STAGE,
  true
)
