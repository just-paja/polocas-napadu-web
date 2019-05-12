import React from 'react'

import { withNamespaces } from '../lib/i18n'
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

export default withNamespaces('common')(ActorsPage)
