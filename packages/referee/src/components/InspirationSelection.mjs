import ButtonGroup from 'react-bootstrap/ButtonGroup'
import React from 'react'
import styles from './InspirationSelection.module.scss'

import { CustomInspirationSelection } from './CustomInspirationSelection.mjs'
import { InspirationList } from './InspirationList.mjs'
import { Button } from '@polocas-napadu/ui/Button.mjs'
import { gql, useMutation } from '@apollo/client'
import { useMatch } from '@polocas-napadu/core/context.mjs'

const INSPIRATION_PICK_RANDOM = gql`
  mutation RandomPickInspiration($matchId: Int!, $replace: Boolean) {
    randomPickInspiration(matchId: $matchId, replace: $replace) {
      ok
    }
  }
`

const ShuffleButton = ({ disabled, replace, label }) => {
  const [mutate, { loading }] = useMutation(INSPIRATION_PICK_RANDOM)
  const match = useMatch()
  const handleClick = () =>
    mutate({
      refetchQueries: ['MatchStage'],
      variables: {
        matchId: match.id,
        replace,
      },
    })
  return (
    <Button disabled={disabled} loading={loading} onClick={handleClick}>
      {label}
    </Button>
  )
}

export const InspirationSelection = () => {
  const { currentStage, preparedInspirationCount } = useMatch()
  return (
    <div>
      <div className={styles.inspirationList}>
        <InspirationList inspirations={currentStage.inspirations} />
      </div>
      <div className="mt-3">
        <ButtonGroup>
          <ShuffleButton
            disabled={
              preparedInspirationCount === 0 ||
              currentStage.inspirations.length === 0
            }
            label="Vylosovat a nahradit"
            replace
          />
          <ShuffleButton
            disabled={preparedInspirationCount === 0}
            label="Vylosovat"
          />
          <CustomInspirationSelection />
        </ButtonGroup>
      </div>
    </div>
  )
}
