import IconButton from '@material-ui/core/IconButton'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
import React from 'react'

import { Classes, Side } from 'core/proptypes'
import { getContestantBySide } from 'core/sides'
import { gql } from 'apollo-boost'
import { MatchContext } from 'core/context'
import { Mutation } from 'react-apollo'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 3
  }
})

const CHANGE_SCORE = gql`
  mutation ChangeScore($contestantGroupId: Int!, $subtract: Boolean) {
    changeContestantGroupScore(contestantGroupId: $contestantGroupId, subtract: $subtract) {
      ok,
    }
  }
`

const ScoreControls = ({ classes, side }) => (
  <MatchContext.Consumer>
    {(data) => {
      const contestantGroup = getContestantBySide(
        data.match.contestantGroups,
        side
      )
      return (
        <Mutation mutation={CHANGE_SCORE}>
          {(mutate, { loading }) => (
            <div className={classes.box}>
              <IconButton
                onClick={() => mutate({
                  refetchQueries: ['MatchStage'],
                  variables: {
                    contestantGroupId: contestantGroup.id,
                    subtract: false
                  }
                })}
              >
                <Add />
              </IconButton>
              <IconButton
                disabled={contestantGroup.scorePoints === 0}
                onClick={() => mutate({
                  refetchQueries: ['MatchStage'],
                  variables: {
                    contestantGroupId: contestantGroup.id,
                    subtract: true
                  }
                })}
              >
                <Remove />
              </IconButton>
            </div>
          )}
        </Mutation>
      )
    }}
  </MatchContext.Consumer>
)

ScoreControls.propTypes = {
  classes: Classes.isRequired,
  side: Side.isRequired
}

export default withStyles(styles)(ScoreControls)
