import PropTypes from 'prop-types'
import React from 'react'
import TeamDetails from './TeamDetails'

import { Children, Classes } from 'core/proptypes'
import { MatchContext } from 'core/context'
import { getContestantTypeBySide } from 'core/sides'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  team: {
    padding: theme.spacing(2)
  }
})

class Team extends React.Component {
  render () {
    const { children, classes, side } = this.props
    const contestantType = getContestantTypeBySide(side)
    const team = this.context.match.contestantGroups.find(group => group.contestantType === contestantType)

    if (!team) {
      return null
    }

    return (
      <div className={classes.team} style={{ backgroundColor: team.color }}>
        <TeamDetails team={team} />
        {children}
      </div>
    )
  }
}

Team.contextType = MatchContext

Team.propTypes = {
  children: Children,
  classes: Classes.isRequired,
  hideScore: PropTypes.bool
}

Team.defaultProps = {
  hideScore: false
}

export default withStyles(styles)(Team)
