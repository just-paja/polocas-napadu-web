import React from 'react'

import { Link } from '../links.mjs'
import { getStageOption, STAGE_GAME } from './stages.mjs'
import { withTranslation } from '@polocas-napadu/ui/i18n.mjs'

function getGameLabel(stage) {
  if (stage.game && stage.game.rules) {
    const inspirations = getGameInspirations(stage)
    const name = (
      <Link route="gameDetail" params={{ slug: stage.game.rules.slug }}>
        {stage.game.rules.name}
      </Link>
    )
    return inspirations ? (
      <>
        {name} ({inspirations})
      </>
    ) : (
      name
    )
  }
  return null
}

function getGameInspirations(stage) {
  if (stage.game && stage.game.inspirations) {
    return stage.game.inspirations
      .map(inspiration => inspiration.text)
      .join(', ')
  }
  return null
}

export const MatchStage = withTranslation(({ stage, t }) => {
  const stageOption = getStageOption(stage)
  if (!stageOption) {
    return null
  }
  const stageLabel = t(`stage_${stage.type}`)
  return <>{stage.type === STAGE_GAME ? getGameLabel(stage) : stageLabel}</>
})
