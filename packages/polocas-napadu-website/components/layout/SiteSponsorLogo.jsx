import React, { useCallback } from 'react'
import styles from './SiteSponsorLogo.scss'

import { Sponsor } from '../proptypes'

export const SiteSponsorLogo = ({ sponsor }) => {
  const style = { backgroundImage: `url(${sponsor.logo})` }
  const href = sponsor.website
  const onClick = useCallback(
    e => {
      if (href) {
        e.preventDefault()
        window.open(href)
      }
    },
    [href]
  )
  return (
    <a
      className={styles.logo}
      href={href}
      onClick={onClick}
      style={style}
      title={sponsor.name}
    />
  )
}

SiteSponsorLogo.propTypes = {
  sponsor: Sponsor.isRequired
}
