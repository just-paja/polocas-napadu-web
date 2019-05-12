import React from 'react'

import { withNamespaces } from '../lib/i18n'
import {
  CommonLayout,
  ContentContainer,
  GroupDescription,
  Title,
  TranslatedPage
} from '../components'

class AboutPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <ContentContainer>
          <Title text={t('about')} />
          <GroupDescription />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withNamespaces('common')(AboutPage)
