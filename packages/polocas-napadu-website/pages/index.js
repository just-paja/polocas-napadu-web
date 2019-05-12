import React from 'react'

import { withNamespaces } from '../lib/i18n'
import {
  CommonLayout,
  ContentContainer,
  ShowList,
  Title,
  TranslatedPage
} from '../components'

class HomePage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title
          text={`${t('projectName')} - ${t('projectNameAppendix')}`}
          pure
        />
        <ContentContainer>
          <h1>Home page</h1>
          <ShowList />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withNamespaces('common')(HomePage)
