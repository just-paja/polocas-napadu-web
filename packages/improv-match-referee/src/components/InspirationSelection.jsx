import CustomInspirationSelection from './CustomInspirationSelection'
import InspirationList from './InspirationList'
import InteractiveButton from './InteractiveButton'
import React from 'react'

import { Classes } from 'polocas-napadu-core/proptypes'
import { gql } from 'apollo-boost'
import { MatchContext } from 'polocas-napadu-core/context'
import { Mutation } from '@apollo/react-components'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  inspirationList: {
    margin: theme.spacing.unit * -1
  }
})

const INSPIRATION_PICK_RANDOM = gql`
  mutation RandomPickInspiration($matchId: Int!, $replace: Boolean) {
    randomPickInspiration(matchId: $matchId, replace: $replace) {
      ok
    }
  }
`

const renderShuffleButton = ({ data, disabled, replace, label }) => (
  <Mutation mutation={INSPIRATION_PICK_RANDOM}>
    {(mutate, { loading }) => {
      const handleClick = () =>
        mutate({
          refetchQueries: ['MatchStage'],
          variables: {
            matchId: data.match.id,
            replace
          }
        })

      return (
        <InteractiveButton
          disabled={disabled}
          loading={loading}
          onClick={handleClick}
        >
          {label}
        </InteractiveButton>
      )
    }}
  </Mutation>
)

const InspirationSelection = ({ classes, data, onChange, value }) => (
  <MatchContext.Consumer>
    {data => (
      <div>
        <div className={classes.inspirationList}>
          <InspirationList
            inspirations={data.match.currentStage.inspirations}
          />
        </div>
        {renderShuffleButton({
          data,
          disabled:
            data.match.preparedInspirationCount === 0 ||
            data.match.currentStage.inspirations.length === 0,
          label: 'Vylosovat a nahradit',
          replace: true
        })}
        {renderShuffleButton({
          data,
          disabled: data.match.preparedInspirationCount === 0,
          label: 'Vylosovat'
        })}
        <CustomInspirationSelection />
      </div>
    )}
  </MatchContext.Consumer>
)

InspirationSelection.propTypes = {
  classes: Classes.isRequired
}

export default withStyles(styles)(InspirationSelection)
