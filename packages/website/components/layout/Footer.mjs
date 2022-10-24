import React from 'react'
import styles from './Footer.module.scss'

import { ContentContainer } from './ContentContainer'
import { LanguageSwitcher } from '../i18n.mjs'
import { SiteSponsors } from '../sponsors.mjs'
import { SocialNetworks } from '../social.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'

export const Footer = withTranslation(({ sponsors, t }) => (
  <>
    <SiteSponsors sponsors={sponsors} />
    <footer className={styles.footer}>
      <ContentContainer>
        <div className="text-center">
          <LanguageSwitcher />
        </div>
        <SocialNetworks className={styles.social} inverse />
        <p className={styles.copyrightNotice}>{t('copyrightNotice')}</p>
      </ContentContainer>
    </footer>
  </>
))
