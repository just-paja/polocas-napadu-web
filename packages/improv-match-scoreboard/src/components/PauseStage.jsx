import GameHistory from './GameHistory'
import Teams from './Teams'
import React from 'react'

import { Classes } from 'core/proptypes'
import { Stage } from './Stage'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  text: {
    color: 'white',
    fontSize: '3rem',
    textAlign: 'center'
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  }
}

class PauseStage extends Stage {
  render () {
    const { classes } = this.props
    return (
      <>
        <Teams />
        <p className={classes.text}>V první půlce jste viděli</p>
        <div className={classes.center}>
          <GameHistory />
        </div>
      </>
    )
  }
}

PauseStage.propTypes = {
  classes: Classes.isRequired
}

export default withStyles(styles)(PauseStage)
