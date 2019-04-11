import React from 'react'

import { ContentContainer } from './ContentContainer';
import { LanguageSwitcher } from '../i18n';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
})

export const Footer = withStyles(styles)(({ classes }) => (
  <footer>
    <ContentContainer>
      <LanguageSwitcher />
      The footer
    </ContentContainer>
  </footer>
))
