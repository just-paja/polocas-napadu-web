import Teams from './Teams'
import GameHistory from './GameHistory'
import React from 'react'

import { Classes } from 'core/proptypes'
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

const FinaleStage = ({ classes }) => (
  <div>
    <Teams />
    <p className={classes.text}>Děkujeme, přijďte zas!</p>
    <div className={classes.center}>
      <GameHistory />
    </div>
    <p className={classes.text}>www.polocas-napadu.cz</p>
  </div>
)

FinaleStage.propTypes = {
  classes: Classes.isRequired
}

export default withStyles(styles)(FinaleStage)
