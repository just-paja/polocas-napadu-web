import React from 'react'

import { withTranslation } from '../lib/i18n'
import {
  CommonLayout,
  ContentContainer,
  ShowList,
  Title,
  TranslatedPage
} from '../components'

class ShowListPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('shows')} />
        <ContentContainer>
          <ShowList />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(ShowListPage)
