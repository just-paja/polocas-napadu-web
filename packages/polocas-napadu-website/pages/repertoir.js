import React from 'react'

import {
  CommonLayout,
  ContentContainer,
  Title,
  TranslatedPage
} from '../components/layout'
import { OgImage } from '../components/social'
import { ShowFormatGallery } from '../components/shows'
import { withTranslation } from '../lib/i18n'

class RepertoirPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <ContentContainer>
          <Title
            text={t('repertoir')}
            description={t('repertoirOgDescription')}
          />
          <OgImage src='/static/pixmaps/og-show-list.jpg' />
          <h1>{t('repertoir')}</h1>
        </ContentContainer>
        <ShowFormatGallery />
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(RepertoirPage)
