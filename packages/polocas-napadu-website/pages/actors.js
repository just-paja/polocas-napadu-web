import React from 'react'

import { CommonLayout, ContentContainer, Title, TranslatedPage } from '../components/layout'
import { withTranslation } from '../lib/i18n'

class ActorsPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <ContentContainer>
          <Title text={t('actors')} />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(ActorsPage)
