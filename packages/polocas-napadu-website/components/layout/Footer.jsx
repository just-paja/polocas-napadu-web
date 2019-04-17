import React from 'react'

import { ContentContainer } from './ContentContainer'
import { LanguageSwitcher } from '../i18n'
import { propsStyled, propsTranslated } from '../proptypes'
import { SocialNetworks } from '../social'
import { withNamespaces } from '../../lib/i18n'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  footer: {
    color: theme.palette.text.inverse,
    background: theme.palette.background.secondary,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    width: '100%'
  },
  copyrightNotice: {
    color: theme.palette.grey[400],
    textAlign: 'center',
    fontWeight: theme.typography.fontWeightLight
  }
})

const FooterComponent = ({ classes, t }) => (
  <footer className={classes.footer}>
    <ContentContainer>
      <LanguageSwitcher />
      <SocialNetworks />
      <p className={classes.copyrightNotice}>{t('copyright-notice')}</p>
    </ContentContainer>
  </footer>
)

FooterComponent.propTypes = {
  ...propsStyled,
  ...propsTranslated
}

export const Footer = withNamespaces(['navigation'])(withStyles(styles)(FooterComponent))
