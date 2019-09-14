import React from 'react'
import Markdown from 'react-markdown'

import { propsTranslated } from '../proptypes'
import { SocialNetworks } from '../social'
import { withTranslation } from '../../lib/i18n'

export const ContactUsComponent = ({ t }) => (
  <>
    <Markdown source={t('contactText')} />
    <SocialNetworks />
  </>
)

ContactUsComponent.propTypes = propsTranslated
ContactUsComponent.displayName = 'ContactUs'

export const ContactUs = withTranslation(['common'])(ContactUsComponent)
