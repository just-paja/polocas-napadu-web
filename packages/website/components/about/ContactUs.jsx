import React from 'react'
import Markdown from 'react-markdown'
import styles from './ContactUs.module.scss'

import { propsTranslated } from 'polocas-napadu-core/proptypes'
import { SocialNetworks } from '../social'
import { withTranslation } from '../../lib/i18n'

export const ContactUsComponent = ({ t }) => (
  <>
    <Markdown source={t('contactText')} />
    <SocialNetworks className={styles.networks} />
  </>
)

ContactUsComponent.propTypes = propsTranslated
ContactUsComponent.displayName = 'ContactUs'

export const ContactUs = withTranslation(['common'])(ContactUsComponent)
