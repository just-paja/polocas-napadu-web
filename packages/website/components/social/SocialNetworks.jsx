import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './SocialNetworks.module.scss'

import { SocialNetworkLink } from './SocialNetworkLink'
import { ClassName, propsTranslated } from 'polocas-napadu-core/proptypes'
import { withTranslation } from '../../lib/i18n'
import {
  FaInstagram,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaPhone,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

const SocialNetworksComponent = ({ className, inverse, t }) => (
  <div
    className={classnames(
      styles.flex,
      {
        [styles.inverse]: inverse
      },
      className
    )}
  >
    <SocialNetworkLink
      href='tel:+420 608 212 242'
      icon={FaPhone}
      inverse={inverse}
      title={t('on-phone')}
    />
    <SocialNetworkLink
      href='mailto:ahoj@polocas-napadu.cz'
      icon={FaEnvelopeOpenText}
      inverse={inverse}
      title={t('on-email')}
    />
    <SocialNetworkLink
      href='https://www.facebook.com/polocas.napadu/'
      icon={FaFacebookF}
      inverse={inverse}
      title={t('on-facebook')}
    />
    <SocialNetworkLink
      href='https://instagram.com/polocasnapadu/'
      icon={FaInstagram}
      inverse={inverse}
      title={t('on-instagram')}
    />
    <SocialNetworkLink
      href='https://twitter.com/polocasnapadu'
      icon={FaTwitter}
      inverse={inverse}
      title={t('on-twitter')}
    />
    <SocialNetworkLink
      href='https://www.youtube.com/channel/UCYgA4ur68sc5W83PgEgnH7w'
      icon={FaYoutube}
      inverse={inverse}
      title={t('on-youtube')}
    />
  </div>
)

SocialNetworksComponent.displayName = 'SocialNetworks'
SocialNetworksComponent.propTypes = {
  ...propsTranslated,
  inverse: PropTypes.bool,
  className: ClassName
}

SocialNetworksComponent.defaultProps = {
  inverse: false
}

export const SocialNetworks = withTranslation(['common'])(
  SocialNetworksComponent
)
