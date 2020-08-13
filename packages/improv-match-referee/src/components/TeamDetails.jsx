import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Band } from 'core/proptypes'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  teamBubble: {
    display: 'flex'
  },
  score: {
    marginLeft: 'auto'
  },
  nameBar: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

class TeamDetails extends Component {
  render () {
    const { classes, team } = this.props
    if (!team || !team.band.name) {
      return null
    }
    return (
      <div
        className={classes.teamBubble}
        style={{ backgroundColor: team.color }}
      >
        <span className={classes.name}>{team.band.name}</span>
        <span className={classes.score}>
          {team.score}
          /
          {team.penaltyPoints || 0}
        </span>
      </div>
    )
  }
}

TeamDetails.propTypes = {
  team: Band.isRequired,
  hideScore: PropTypes.bool
}

TeamDetails.defaultProps = {
  hideScore: false
}

export default withStyles(styles)(TeamDetails)
