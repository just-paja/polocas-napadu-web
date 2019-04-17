import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import { propsStyled } from '../proptypes'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  circle: {
    alignItems: 'center',
    borderRadius: '50%',
    display: 'flex',
    height: theme.typography.fontSize * 2,
    justifyContent: 'center',
    width: theme.typography.fontSize * 2
  },
  inverse: {
    backgroundColor: theme.palette.background.default
  },
  regular: {
    backgroundColor: theme.palette.background.inverse
  }
})

function openInNewWindow (event) {
  const href = event.currentTarget.href
  if (!href.match(/^mailto:/)) {
    event.preventDefault()
    window.open(event.currentTarget.href)
  }
}

const SocialNetworkLinkComponent = ({
  classes,
  href,
  icon: Icon,
  inverse,
  title
}) => (
  <a
    className={classnames(
      classes.circle,
      inverse
        ? classes.inverse
        : classes.regular
    )}
    href={href}
    onClick={openInNewWindow}
    title={title}
  >
    <Icon />
  </a>
)

SocialNetworkLinkComponent.displayName = 'SocialNetworkLink'

SocialNetworkLinkComponent.propTypes = {
  ...propsStyled,
  href: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

SocialNetworkLinkComponent.defaultProps = {
  inverse: false
}

export const SocialNetworkLink = withStyles(styles)(SocialNetworkLinkComponent)
