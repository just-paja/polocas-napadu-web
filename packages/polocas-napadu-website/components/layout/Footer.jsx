import React from 'react'
import styles from './Footer.scss'

import { ContentContainer } from './ContentContainer'
import { LanguageSwitcher } from '../i18n'
import { propsTranslated } from '../proptypes'
import { SiteSponsors } from './SiteSponsors'
import { SocialNetworks } from '../social'
import { withTranslation } from '../../lib/i18n'

const FooterComponent = ({ t }) => (
  <footer className={styles.footer}>
    <ContentContainer>
      <SiteSponsors />
      <div className='text-center'>
        <LanguageSwitcher />
      </div>
      <SocialNetworks className={styles.social} inverse />
      <p className={styles.copyrightNotice}>{t('copyrightNotice')}</p>
    </ContentContainer>
  </footer>
)

FooterComponent.propTypes = {
  ...propsTranslated
}

export const Footer = withTranslation(['common'])(FooterComponent)
