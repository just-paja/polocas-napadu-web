import AppBar from '@material-ui/core/AppBar'
import CloseIcon from '@material-ui/icons/Close'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import FoulSelection from './FoulSelection'
import IconButton from '@material-ui/core/IconButton'
import InteractiveButton from './InteractiveButton'
import List from '@material-ui/core/List'
import PropTypes from 'prop-types'
import React from 'react'
import TeamPenaltyButton from './TeamPenaltyButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { Classes } from 'core/proptypes'
import { MatchContext } from 'core/context'
import { withStyles } from '@material-ui/core/styles'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const ADD_PENALTY_POINT = gql`
  mutation AddTeamPenalty(
    $contestantGroupId: Int!,
    $foulTypeId: Int!
    $playerId: Int,
  ) {
    addFoulPoint(
      contestantGroupId: $contestantGroupId,
      foulTypeId: $foulTypeId,
      playerId: $playerId,
    ) {
      ok,
    }
  }
`

const styles = {
  appBar: {
    position: 'relative'
  },
  flex: {
    flex: 1
  },
  teams: {
    display: 'flex',
    justifyContent: 'center'
  }
}

class PenaltyDialog extends React.Component {
  constructor () {
    super()
    this.handleActorChange = this.handleActorChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleFoulTypeChange = this.handleFoulTypeChange.bind(this)
    this.handleTabChange = this.handleTabChange.bind(this)
    this.state = {
      tab: 'groups',
      value: {}
    }
  }

  handleTabChange (event, tab) {
    this.setState({ tab })
  }

  handleActorChange (value) {
    this.setState({
      value: {
        ...this.state.value,
        contestantGroupId: value.contestantGroupId,
        playerId: value.playerId
      }
    })
  }

  handleClose () {
    this.setState({ value: {} })
    this.props.onClose()
  }

  handleFoulTypeChange (foulType) {
    this.setState({
      value: {
        ...this.state.value,
        foulType: foulType
      }
    })
  }

  isSelected (value) {
    return (
      value.playerId === this.state.value.playerId &&
      value.contestantGroupId === this.state.value.contestantGroupId
    )
  }

  renderHeader (mutate, loading) {
    const { classes } = this.props
    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton color='inherit' onClick={this.handleClose} aria-label='Close'>
            <CloseIcon />
          </IconButton>
          <Typography variant='h6' color='inherit' className={classes.flex}>
            Udělit trestný bod
          </Typography>
          <InteractiveButton
            color='inherit'
            disabled={!this.state.value.contestantGroupId || !this.state.value.foulType}
            loading={loading}
            onClick={() => mutate({
              variables: {
                contestantGroupId: this.state.value.contestantGroupId,
                foulTypeId: this.state.value.foulType.id,
                playerId: this.state.value.playerId
              }
            })}
          >
            Uložit
          </InteractiveButton>
        </Toolbar>
      </AppBar>
    )
  }

  render () {
    const { classes, open } = this.props
    return (
      <MatchContext.Consumer>
        {data => (
          <Dialog
            aria-labelledby='penaltyDialogTitle'
            fullScreen
            onClose={this.handleClose}
            open={open}
          >
            <Mutation
              mutation={ADD_PENALTY_POINT}
              refetchQueries={['MatchStage']}
              onCompleted={this.handleClose}
            >
              {(mutate, { loading }) => (
                <>
                  {this.renderHeader(mutate)}
                  <DialogContent>
                    <h3>Jaký faul?</h3>
                    <FoulSelection
                      disabled={loading}
                      onChange={this.handleFoulTypeChange}
                      value={this.state.value.foulType}
                    />
                    <h3>Komu?</h3>
                    <div className={classes.teams}>
                      {data.match.contestantGroups
                        .map(group => ({
                          avatar: group.band.logo,
                          contestantGroupId: group.id,
                          name: group.band.name,
                          playerId: null,
                          players: group.players
                        }))
                        .map(group => (
                          <List key={group.contestantGroupId}>
                            <TeamPenaltyButton
                              disabled={loading}
                              target={group}
                              onChange={this.handleActorChange}
                              selected={this.isSelected(group)}
                            />
                            {group.players
                              .map(player => ({
                                contestantGroupId: group.contestantGroupId,
                                playerId: player.id,
                                name: player.profile.name
                              }))
                              .map(player => (
                                <TeamPenaltyButton
                                  disabled={loading}
                                  key={player.id}
                                  onChange={this.handleActorChange}
                                  selected={this.isSelected(player)}
                                  target={player}
                                />
                              ))}
                          </List>
                        ))}
                    </div>
                  </DialogContent>
                </>
              )}
            </Mutation>
          </Dialog>
        )}
      </MatchContext.Consumer>
    )
  }
}

PenaltyDialog.propTypes = {
  classes: Classes.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default withStyles(styles)(PenaltyDialog)
