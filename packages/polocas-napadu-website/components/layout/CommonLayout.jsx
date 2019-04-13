import React from 'react'

import { Footer } from './Footer'
import { MainMenu } from './MainMenu'
import { withStyles } from '@material-ui/core/styles'

const flexWrap = {
  display: 'flex',
  flexDirection: 'column'
}

const flexInner = {
  flexGrow: 1
}

const styles = theme => ({
  '@global': {
    body: {
      ...flexWrap,
      ...flexInner,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
      padding: 0
    },
    html: {
      ...flexWrap,
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    '#__next': {
      ...flexWrap,
      ...flexInner
    }
  },
  content: {
    ...flexInner
  }
})

export const CommonLayout = withStyles(styles)(({
  children,
  classes
}) => (
  <React.Fragment>
    <MainMenu />
    <div className={classes.content}>
      {children}
    </div>
    <Footer />
  </React.Fragment>
))
