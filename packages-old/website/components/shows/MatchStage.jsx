import React from 'react'

import { Link } from '../bindings'
import { getStageOption, STAGE_GAME } from './stages'
import { withTranslation } from '../../lib/i18n'

function getGameLabel (stage) {
  if (stage.game && stage.game.rules) {
    const inspirations = getGameInspirations(stage)
    const name = (
      <Link route='gameDetail' params={{ slug: stage.game.rules.slug }}>
        <a>{stage.game.rules.name}</a>
      </Link>
    )
    return inspirations
      ? <>{name}{' '}({inspirations})</>
      : name
  }
  return null
}

function getGameInspirations (stage) {
  if (stage.game && stage.game.inspirations) {
    return stage.game.inspirations.map(inspiration => inspiration.text).join(', ')
  }
  return null
}

export function MatchStageComponent ({ stage, t }) {
  const stageOption = getStageOption(stage)
  if (!stageOption) {
    return null
  }
  const stageLabel = t(`stage_${stage.type}`)
  return (
    <>
      {stage.type === STAGE_GAME
        ? getGameLabel(stage)
        : stageLabel}
    </>
  )
}

export const MatchStage = withTranslation(['common'])(MatchStageComponent)
