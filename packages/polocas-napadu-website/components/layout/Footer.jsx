import React from 'react'

import { ContentContainer } from './ContentContainer'
import { LanguageSwitcher } from '../i18n'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  footer: {
    color: theme.palette.text.inverse,
    background: theme.palette.background.secondary,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    width: '100%'
  }
})

export const Footer = withStyles(styles)(({ classes }) => (
  <footer className={classes.footer}>
    <ContentContainer>
      <LanguageSwitcher />
      The footer
    </ContentContainer>
  </footer>
))
