import React from 'react'

import { Footer } from './Footer'
import { MainMenu } from './MainMenu'
import { withStyles } from '@material-ui/core/styles'

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
    <Footer />
  </div>
))
