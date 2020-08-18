import ErrorOutline from '@material-ui/icons/ErrorOutline'
import PenaltyDialog from './PenaltyDialog'
import React from 'react'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import SpeedDialControl from './SpeedDialControl'

class MatchSpeedDial extends React.Component {
  constructor () {
    super()
    this.handlePenaltyDialogClose = this.handlePenaltyDialogClose.bind(this)
    this.handlePenaltyDialogOpen = this.handlePenaltyDialogOpen.bind(this)
    this.state = {
      showPenaltyDialog: false
    }
  }

  handlePenaltyDialogClose () {
    this.setState({ showPenaltyDialog: false })
  }

  handlePenaltyDialogOpen () {
    this.setState({ showPenaltyDialog: true })
  }

  render () {
    return (
      <>
        <SpeedDialControl label='Přidat'>
          <SpeedDialAction
            icon={<ErrorOutline />}
            onClick={this.handlePenaltyDialogOpen}
            tooltipTitle='Trestný bod'
            tooltipOpen
          />
        </SpeedDialControl>
        <PenaltyDialog
          open={this.state.showPenaltyDialog}
          onClose={this.handlePenaltyDialogClose}
        />
      </>
    )
  }
}

export default MatchSpeedDial
