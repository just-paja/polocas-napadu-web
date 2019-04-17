import React from 'react'

import { SocialNetworkLink } from './SocialNetworkLink'
import { propsStyled, propsTranslated } from '../proptypes'
import { withNamespaces } from '../../lib/i18n'
import { withStyles } from '@material-ui/core/styles'
import {
  FaEnvelopeOpenText,
  FaFacebookF,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

const styles = theme => ({
  flex: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    '& > *': {
      marginLeft: theme.spacing.unit / 2,
      marginRight: theme.spacing.unit / 2
    }
  }
})

const SocialNetworksComponent = ({ classes, t }) => (
  <div className={classes.flex}>
    <SocialNetworkLink
      href='mailto:ahoj@polocas-napadu.cz'
      icon={FaEnvelopeOpenText}
      title={t('on-email')}
    />
    <SocialNetworkLink
      href='https://www.facebook.com/polocas.napadu/'
      icon={FaFacebookF}
      title={t('on-facebook')}
    />
    <SocialNetworkLink
      href='https://twitter.com/polocasnapadu'
      icon={FaTwitter}
      title={t('on-twitter')}
    />
    <SocialNetworkLink
      href='https://www.youtube.com/channel/UCYgA4ur68sc5W83PgEgnH7w'
      icon={FaYoutube}
      title={t('on-youtube')}
    />
  </div>
)

SocialNetworksComponent.displayName = 'SocialNetworks'
SocialNetworksComponent.propTypes = {
  ...propsStyled,
  ...propsTranslated
}

export const SocialNetworks = withNamespaces(['navigation'])(
  withStyles(styles)(SocialNetworksComponent)
)
