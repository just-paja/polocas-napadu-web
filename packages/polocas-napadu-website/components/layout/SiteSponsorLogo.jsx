import React, { useCallback } from 'react'
import styles from './SiteSponsorLogo.module.scss'

import { Image } from '../photos'
import { Sponsor } from 'polocas-napadu-core/proptypes'

export const SiteSponsorLogo = ({ sponsor }) => {
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
    <Image
      bg
      className={styles.logo}
      component='a'
      href={href}
      image={sponsor.logo}
      onClick={onClick}
      title={sponsor.name}
    />
  )
}

SiteSponsorLogo.propTypes = {
  sponsor: Sponsor.isRequired
}
