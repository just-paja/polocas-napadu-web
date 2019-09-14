import React from 'react'

import { CommonLayout, ContentContainer, Title, TranslatedPage } from '../components/layout'
import { FutureShowList } from '../components/shows'
import { withTranslation } from '../lib/i18n'

class ShowListPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('shows')} />
        <ContentContainer>
          <FutureShowList />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(ShowListPage)
