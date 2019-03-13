import AppBar from '@material-ui/core/AppBar'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

import { Link } from '../bindings'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  container: {
    margin: 'auto',
    maxWidth: 1024,
    width: '100%'
  },
  menuItem: {
    fontSize: theme.typography.fontSize * 1.5
  }
})

export const MainMenu = withStyles(styles)(({ classes }) => (
  <AppBar position='static'>
    <Toolbar className={classes.container}>
      <Grid container spacing={24}>
        <Grid className={classes.menuItem} item>
          <Link route='home'>Home</Link>
        </Grid>
        <Grid className={classes.menuItem} item>
          <Link route='showList'>Představení</Link>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
))
