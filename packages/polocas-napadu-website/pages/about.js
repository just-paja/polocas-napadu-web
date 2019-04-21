import React from 'react'

import { TranslatedPage } from './TranslatedPage'
import { withNamespaces } from '../lib/i18n'
import {
  CommonLayout,
  ContentContainer,
  GroupDescription,
  Title
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

export default withNamespaces('navigation')(AboutPage)
