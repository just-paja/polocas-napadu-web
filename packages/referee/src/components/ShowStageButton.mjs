import React from 'react'

import { Button } from '@polocas-napadu/ui/Button.mjs'
import { useMatch } from '@polocas-napadu/core/context.mjs'
import { STAGE_GAME, STAGE_OPTIONS } from '@polocas-napadu/core/constants.mjs'

const getStageLabel = stage => {
  const option = STAGE_OPTIONS.find(o => o.value === stage)
  return option && option.label
}

const isStageReady = (stage, currentStage) => {
  if (stage === STAGE_GAME) {
    return Boolean(currentStage.game)
  }
  return true
}

export const ShowStageButton = ({ back, mutate, stage, ...props }) => {
  const { id, currentStage } = useMatch()
  const handleClick = () =>
    mutate({
      refetchQueries: ['MatchStage'],
      variables: {
        matchId: id,
        stage,
      },
    })
  return (
    <Button
      {...props}
      disabled={!isStageReady(stage, currentStage)}
      iconRight={!back}
      onClick={handleClick}
    >
      {getStageLabel(stage)}
    </Button>
  )
}
