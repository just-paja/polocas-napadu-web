import React from 'react'

import { CommonLayout, ContentContainer, Title, TranslatedPage } from '../components/layout'
import { ShowFormatGallery } from '../components/shows'
import { withTranslation } from '../lib/i18n'

class RepertoirPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <ContentContainer>
          <Title text={t('repertoir')} />
          <h2>{t('repertoir')}</h2>
          <ShowFormatGallery />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(RepertoirPage)
