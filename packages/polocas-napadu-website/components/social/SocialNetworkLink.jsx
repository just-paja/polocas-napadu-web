import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './SocialNetworkLink.module.scss'

function openInNewWindow (event) {
  const href = event.currentTarget.href
  if (!href.match(/^mailto:/)) {
    event.preventDefault()
    window.open(event.currentTarget.href)
  }
}

export const SocialNetworkLink = ({ href, icon: Icon, inverse, title }) => (
  <a
    className={classnames(
      styles.circle,
      inverse ? styles.inverse : styles.regular
    )}
    href={href}
    onClick={openInNewWindow}
    title={title}
  >
    <Icon />
  </a>
)

SocialNetworkLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

SocialNetworkLink.defaultProps = {
  inverse: false
}
