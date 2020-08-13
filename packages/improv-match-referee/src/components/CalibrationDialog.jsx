import AppBar from '@material-ui/core/AppBar'
import CloseIcon from '@material-ui/icons/Close'
import DecibelMeter from './DecibelMeter'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { Classes } from 'core/proptypes'
import { MatchContext } from 'core/context'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  flex: {
    flex: 1
  },
  center: {
    textAlign: 'center'
  },
  calibration: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 4
  }
})

class CalibrationDialog extends React.Component {
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

  renderHeader () {
    const { classes } = this.props
    return (
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton color='inherit' onClick={this.handleClose} aria-label='Close'>
            <CloseIcon />
          </IconButton>
          <Typography variant='h6' color='inherit' className={classes.flex}>
            Kalibrace hlasovacího zařízení
          </Typography>
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
            <div>
              {this.renderHeader()}
              <DialogContent className={classes.calibration}>
                <DecibelMeter
                  group={{
                    id: 666,
                    contestantType: 'A_1',
                    band: {
                      name: 'Kalibrace'
                    }
                  }}
                  onRecordingStart={() => {}}
                  onRecordingStop={() => {}}
                  onScrape={() => {}}
                  result={null}
                  recording={false}
                />
                <p className={classes.center}>
                  Pro úspěšnou kalibraci je potřeba hlasovat alespoň dvakrát. Sleduj graf na obrazovce.
                </p>
              </DialogContent>
            </div>
          </Dialog>
        )}
      </MatchContext.Consumer>
    )
  }
}

CalibrationDialog.propTypes = {
  classes: Classes.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default withStyles(styles)(CalibrationDialog)
