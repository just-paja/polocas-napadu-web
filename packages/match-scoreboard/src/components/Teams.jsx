import PropTypes from 'prop-types'
import React from 'react'
import TeamDetails from './TeamDetails'

import { Classes } from 'polocas-napadu-core/proptypes'
import {
  CONTESTANT_HOME,
  CONTESTANT_GUEST
} from 'polocas-napadu-core/constants'
import { MatchContext } from 'polocas-napadu-core/context'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  split: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }
}

class Teams extends React.Component {
  static contextType = MatchContext

  static propTypes = {
    classes: Classes.isRequired,
    hideScore: PropTypes.bool
  }

  static defaultProps = {
    hideScore: false
  }

  dimmTeam (contestantGroupId) {
    const { currentStage } = this.context.match
    if (currentStage && currentStage.scorePointPoll) {
      return currentStage.scorePointPoll.votings.some(
        voting =>
          voting.contestantGroup &&
          voting.contestantGroup.id !== contestantGroupId &&
          !voting.closed
      )
    }
    return false
  }

  getGroup (type) {
    return this.context.match.contestantGroups.find(
      group => group.contestantType === type
    )
  }

  render () {
    const { classes, hideScore } = this.props
    const home = this.getGroup(CONTESTANT_HOME)
    const guest = this.getGroup(CONTESTANT_GUEST)
    return (
      <div className={classes.split}>
        {home && (
          <TeamDetails
            dimm={this.dimmTeam(home.id)}
            hideScore={hideScore}
            side='left'
            team={home}
          />
        )}
        {guest && (
          <TeamDetails
            dimm={this.dimmTeam(guest.id)}
            hideScore={hideScore}
            side='right'
            team={guest}
          />
        )}
      </div>
    )
  }
}

export default withStyles(styles)(Teams)
