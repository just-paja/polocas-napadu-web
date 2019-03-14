import React from 'react'

import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import { MainMenu } from './MainMenu'
import { siteTheme } from './mui'

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
  <MuiThemeProvider theme={siteTheme}>
    <div className={classes.main}>
      <MainMenu />
      <div>
        {children}
      </div>
    </div>
  </MuiThemeProvider>
))
