import React from 'react'

import { withTranslation } from '../lib/i18n'
import {
  ContentContainer,
  ShowList,
  Title,
  TranslatedPage
} from '../components'
import { Footer } from '../components/layout'
import { HomeBanner } from '../components/about'

class HomePage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <>
        <Title
          text={`${t('projectName')} - ${t('projectNameAppendix')}`}
          pure
        />
        <HomeBanner />
        <ContentContainer>
          <h2>Home page</h2>
          <ShowList />
        </ContentContainer>
        <Footer />
      </>
    )
  }
}

export default withTranslation('common')(HomePage)
