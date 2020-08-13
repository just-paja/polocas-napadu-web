import InspirationCount from './InspirationCount'
import InspirationQr from './InspirationQr'
import React from 'react'
import Teams from './Teams'

import { Classes } from 'core/proptypes'
import { Stage } from './Stage'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  inspiration: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  qr: {
    width: 400
  }
}

class ShowSetupStage extends Stage {
  render () {
    const { classes } = this.props
    return (
      <>
        <Teams hideScore />
        <div className={classes.inspiration}>
          <InspirationQr className={classes.qr} />
        </div>
        <InspirationCount />
      </>
    )
  }
}

ShowSetupStage.propTypes = {
  classes: Classes.isRequired
}

export default withStyles(styles)(ShowSetupStage)
