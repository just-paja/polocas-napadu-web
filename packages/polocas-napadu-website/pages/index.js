import React from 'react'
import styles from './index.scss'

import { ContentContainer, Footer, MainMenu, Title, TranslatedPage } from '../components/layout'
import { HomeBanner } from '../components/about'
import { FutureShowList } from '../components/shows'
import { withTranslation } from '../lib/i18n'

class HomePage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <>
        <Title
          text={`${t('projectName')} - ${t('projectNameAppendix')}`}
          pure
        />
        <MainMenu />
        <HomeBanner />
        <ContentContainer className={styles.content}>
          <h2>Home page</h2>
          <FutureShowList />
        </ContentContainer>
        <Footer />
      </>
    )
  }
}

export default withTranslation('common')(HomePage)
