import React from 'react'

import { CommonLayout, ContentContainer, Title, TranslatedPage } from '../components/layout'
import { withTranslation } from '../lib/i18n'

class RepertoirPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('repertoir')} />
        <ContentContainer>
          ddd
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(RepertoirPage)
