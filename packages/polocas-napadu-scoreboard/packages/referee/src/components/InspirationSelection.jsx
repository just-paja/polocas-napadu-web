import CustomInspirationSelection from './CustomInspirationSelection'
import InspirationList from './InspirationList'
import InteractiveButton from './InteractiveButton'
import React from 'react'

import { Classes } from 'core/proptypes'
import { gql } from 'apollo-boost'
import { MatchContext } from 'core/context'
import { Mutation } from 'react-apollo'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  inspirationList: {
    margin: theme.spacing.unit * -1
  }
})

const INSPIRATION_PICK_RANDOM = gql`
  mutation RandomPickInspiration($matchId: Int!, $replace: Boolean) {
    randomPickInspiration(matchId: $matchId, replace: $replace) {
      ok,
    }
  }
`

const renderShuffleButton = ({ data, disabled, replace, label }) => (
  <Mutation mutation={INSPIRATION_PICK_RANDOM}>
    {(mutate, { loading }) => (
      <InteractiveButton
        disabled={disabled}
        loading={loading}
        onClick={() => mutate({
          refetchQueries: ['MatchStage'],
          variables: {
            matchId: data.match.id,
            replace
          }
        })}
      >
        {label}
      </InteractiveButton>
    )}
  </Mutation>
)

const InspirationSelection = ({ classes, data, onChange, value }) => (
  <MatchContext.Consumer>
    {(data) => (
      <div>
        <div className={classes.inspirationList}>
          <InspirationList inspirations={data.match.currentStage.inspirations} />
        </div>
        {renderShuffleButton({
          data,
          disabled: (
            data.match.preparedInspirationCount === 0 ||
            data.match.currentStage.inspirations.length === 0
          ),
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
