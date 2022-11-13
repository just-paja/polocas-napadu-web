import React from 'react'

import { gql, useMutation } from '@apollo/client'
import { NextIcon, PrevIcon } from 'polocas-napadu-ui/icons.mjs'
import { ShowStageButton } from './ShowStageButton.mjs'

const STAGE_FORWARD = gql`
  mutation ChangeStage($matchId: Int!, $stage: String!) {
    changeMatchStage(matchId: $matchId, stage: $stage) {
      ok
    }
  }
`

const STAGE_BACK = gql`
  mutation RewindStage($matchId: Int!) {
    rewindMatchStage(matchId: $matchId) {
      ok
    }
  }
`

export const ShowStageControl = ({
  component: Component = ShowStageButton,
  back,
  ...props
}) => {
  const [mutate, { loading }] = useMutation(back ? STAGE_BACK : STAGE_FORWARD)
  return (
    <Component
      {...props}
      back={back}
      icon={back ? <PrevIcon /> : <NextIcon />}
      mutate={mutate}
      loading={loading}
    />
  )
}
