import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { MainMenu } from './MainMenu'

const styles = theme => ({
  '@global': {
    body: {
      fontFamily: theme.typography.fontFamily,
      padding: 0,
      margin: 0
    }
  },
  main: {
  }
})

export const CommonLayout = withStyles(styles)(({
  children,
  classes
}) => (
  <div className={classes.main}>
    <MainMenu />
    <div>
      {children}
    </div>
  </div>
))
