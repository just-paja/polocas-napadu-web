import React from 'react'
import Markdown from 'react-markdown'

import { propsTranslated } from '../proptypes'
import { SocialNetworks } from '../social'
import { withTranslation } from '../../lib/i18n'

export const ContactUsComponent = ({ t }) => (
  <React.Fragment>
    <Markdown source={t('contactText')} />
    <SocialNetworks />
  </React.Fragment>
)

ContactUsComponent.propTypes = propsTranslated
ContactUsComponent.displayName = 'ContactUs'

export const ContactUs = withTranslation(['common'])(ContactUsComponent)
