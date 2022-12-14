import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './social.module.scss'

import { withTranslation } from '@polocas-napadu/ui/i18n.mjs'
import { openExternalUrl } from './links.mjs'
import {
  InstagramIcon,
  EmailIcon,
  FacebookIcon,
  CallIcon,
  TwitterIcon,
  YouTubeIcon,
} from '@polocas-napadu/ui/icons.mjs'

export const SocialNetworkLink = ({
  id,
  href,
  icon: Icon,
  inverse,
  title,
  vertical,
}) => {
  const className = classnames(
    styles.circle,
    inverse ? styles.circleInverse : styles.regular
  )
  const iconLink = (
    <a
      className={className}
      href={href}
      onClick={openExternalUrl}
      title={title}
    >
      <Icon />
    </a>
  )
  if (!vertical) {
    return iconLink
  }

  return (
    <a
      className={classnames('d-flex align-items-center', styles.verticalLink)}
      href={href}
      onClick={openExternalUrl}
    >
      <div className={classnames(className, 'me-2')}>
        <Icon />
      </div>
      <div>
        <span className="text-muted">{title}:</span>
        <br />
        {id}
      </div>
    </a>
  )
}

SocialNetworkLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export const SocialNetworks = withTranslation(
  ({ className, inverse, vertical, t }) => (
    <div
      className={classnames(
        styles.flex,
        { [styles.inverse]: inverse, 'flex-column': vertical },

        className
      )}
    >
      <SocialNetworkLink
        href="tel:+420 608 212 242"
        id="+420 608 212 242"
        icon={CallIcon}
        inverse={inverse}
        title={t('on-phone')}
        vertical={vertical}
      />
      <SocialNetworkLink
        href="mailto:ahoj@polocas-napadu.cz"
        id="ahoj@polocas-napadu.cz"
        icon={EmailIcon}
        inverse={inverse}
        title={t('on-email')}
        vertical={vertical}
      />
      <SocialNetworkLink
        href="https://facebook.com/polocas.napadu/"
        id="Poločas nápadu"
        icon={FacebookIcon}
        inverse={inverse}
        title={t('on-facebook')}
        vertical={vertical}
      />
      <SocialNetworkLink
        href="https://instagram.com/polocasnapadu/"
        id="polocasnapadu"
        icon={InstagramIcon}
        inverse={inverse}
        title={t('on-instagram')}
        vertical={vertical}
      />
      <SocialNetworkLink
        href="https://twitter.com/polocasnapadu"
        id="polocasnapadu"
        icon={TwitterIcon}
        inverse={inverse}
        title={t('on-twitter')}
        vertical={vertical}
      />
      <SocialNetworkLink
        href="https://www.youtube.com/channel/UCYgA4ur68sc5W83PgEgnH7w"
        id="Poločas nápadu"
        icon={YouTubeIcon}
        inverse={inverse}
        title={t('on-youtube')}
        vertical={vertical}
      />
    </div>
  )
)
