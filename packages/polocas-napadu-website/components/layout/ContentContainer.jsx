import React from 'react'

import { withStyles } from '@material-ui/core/styles'

const styles = {
  container: {
    margin: 'auto',
    maxWidth: 1024,
    width: '100%'
  }
}

export const ContentContainer = withStyles(styles)(({ children, classes }) => (
  <div className={classes.container}>
    {children}
  </div>
))
