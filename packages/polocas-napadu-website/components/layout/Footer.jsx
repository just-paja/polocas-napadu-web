import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { LanguageSwitcher } from '../i18n';

const styles = theme => ({
})

export const Footer = withStyles(styles)(({ classes }) => (
  <footer>
    <LanguageSwitcher />
    The footer
  </footer>
))
