import React from 'react'
import Markdown from 'react-markdown'

import { propsTranslated } from '../proptypes'
import { withTranslation } from '../../lib/i18n'

const GroupDescriptionComponent = ({ t }) => (
  <section>
    <h1>{t('group-description-heading')}</h1>
    <Markdown source={t('group-description-perex')} />
  </section>
)

GroupDescriptionComponent.propTypes = propsTranslated

export const GroupDescription = withTranslation(['common'])(GroupDescriptionComponent)
