import React from 'react'
import styles from './ContactUs.module.scss'

import { Markdown } from '../markdown.mjs'
import { SocialNetworks } from '../social.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'

export const ContactUs = withTranslation(({ t }) => (
  <>
    <Markdown source={t('contactText')} />
    <SocialNetworks className={styles.networks} vertical />
  </>
))
