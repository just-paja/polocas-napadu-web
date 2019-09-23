import React from 'react'
import Markdown from 'react-markdown'

import { propsTranslated } from '../proptypes'
import { withTranslation } from '../../lib/i18n'

const GroupDescriptionComponent = ({ t }) => (
  <section>
    <h1>{t('groupDescriptionHeading')}</h1>
    <Markdown source={t('groupDescriptionPerex')} />
  </section>
)

GroupDescriptionComponent.propTypes = propsTranslated

export const GroupDescription = withTranslation(['common'])(GroupDescriptionComponent)
