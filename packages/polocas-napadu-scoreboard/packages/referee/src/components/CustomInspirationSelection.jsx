import CustomInspirationDialog from './CustomInspirationDialog'
import InteractiveButton from './InteractiveButton'
import React from 'react'

class CustomInspirationSelection extends React.Component {
  constructor () {
    super()
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      open: false
    }
  }

  handleClose () {
    this.setState({ open: false })
  }

  handleOpen () {
    this.setState({ open: true })
  }

  render () {
    return (
      <>
        <InteractiveButton onClick={this.handleOpen}>
          Zadat ručně
        </InteractiveButton>
        <CustomInspirationDialog
          open={this.state.open}
          onClose={this.handleClose}
        />
      </>
    )
  }
}

export default CustomInspirationSelection
