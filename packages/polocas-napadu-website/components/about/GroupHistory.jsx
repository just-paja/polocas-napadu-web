import React from 'react'
import Markdown from 'react-markdown'

import { propsTranslated } from '../proptypes'
import { withTranslation } from '../../lib/i18n'

const GroupHistoryComponent = ({ t }) => (
  <section>
    <h1>{t('group-history-heading')}</h1>
    <Markdown source={t('group-history-perex')} />
  </section>
)

GroupHistoryComponent.propTypes = propsTranslated

export const GroupHistory = withTranslation(['common'])(GroupHistoryComponent)
