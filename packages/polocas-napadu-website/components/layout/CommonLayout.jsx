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
    '@font-face': {
      fontFamily: 'HK Blocker Heavy',
      src: [
        'url("/static/fonts/hk-blocker-heavy.woff") format("woff")',
        'url("/static/fonts/hk-blocker-heavy.woff2") format("woff2")',
        'url("/static/fonts/hk-blocker-heavy.otf") format("opentype")'
      ]
    },
    body: {
      ...flexWrap,
      ...flexInner,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
      padding: 0,
      color: theme.palette.text.primary
    },
    html: {
      ...flexWrap,
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    a: {
      color: theme.palette.primary.main,
      '&:hover': {
        color: theme.palette.primary.light
      }
    },
    p: {
      maxWidth: '38rem',
      textAlign: 'justify'
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
