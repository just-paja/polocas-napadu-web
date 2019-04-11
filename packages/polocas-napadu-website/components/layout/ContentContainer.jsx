import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  container: {
    margin: 'auto',
    maxWidth: 1024,
    width: '100%',
    paddingLeft: 4 * theme.spacing.unit,
    paddingRight: 4 * theme.spacing.unit
  }
})

export const ContentContainer = withStyles(styles)(({ children, classes }) => (
  <div className={classes.container}>
    {children}
  </div>
))
