import React from 'react'
import styles from './sponsors.module.scss'

import { Image } from './images.mjs'
import { openExternalUrl } from './links.mjs'
import { Sponsor } from '@polocas-napadu/core/proptypes.mjs'
import { useSponsors } from '@polocas-napadu/core/context.mjs'
import { withTranslation } from '@polocas-napadu/ui/i18n.mjs'

const SiteSponsorLogo = ({ sponsor }) => (
  <Image
    className={styles.logo}
    component="a"
    href={sponsor.website}
    image={sponsor.logo}
    onClick={openExternalUrl}
    title={sponsor.name}
    size="avatar"
  />
)

SiteSponsorLogo.propTypes = {
  sponsor: Sponsor.isRequired,
}

export const SiteSponsors = withTranslation(({ t }) => {
  const sponsors = useSponsors()
  if (!sponsors.length) {
    return null
  }

  return (
    <div className={styles.sponsors}>
      <h4 className="text-center">
        <strong>{t('coopWith')}</strong>
      </h4>
      <div className="d-flex justify-content-center">
        {sponsors.map(sponsor => (
          <SiteSponsorLogo key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    </div>
  )
})
