import React from 'react'
import Markdown from 'react-markdown'

import { ContentContainer } from '../layout'
import { propsTranslated } from 'polocas-napadu-core/proptypes'
import { withTranslation } from '../../lib/i18n'

const GroupHistoryBannerComponent = ({ t }) => (
  <ContentContainer column as='section'>
    <h2>{t('groupHistoryHeading')}</h2>
    <Markdown source={t('groupHistoryPerex')} />
  </ContentContainer>
)

GroupHistoryBannerComponent.propTypes = propsTranslated

export const GroupHistoryBanner = withTranslation(['common'])(GroupHistoryBannerComponent)
