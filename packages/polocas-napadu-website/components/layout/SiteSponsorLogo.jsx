import PropTypes from 'prop-types'
import React from 'react'
import styles from './SiteSponsorLogo.scss'

import { Sponsor } from '../proptypes'

export const SiteSponsorLogo = ({ sponsor }) => {
  const style = { backgroundImage: `url(${sponsor.logo})` }
  return (
    <div style={style} className={styles.logo} />
  )
}

SiteSponsorLogo.propTypes = {
  sponsor: Sponsor.isRequired
}
