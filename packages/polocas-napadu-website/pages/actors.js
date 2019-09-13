import React from 'react'

import { withTranslation } from '../lib/i18n'
import {
  CommonLayout,
  ContentContainer,
  Title,
  TranslatedPage
} from '../components'

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
