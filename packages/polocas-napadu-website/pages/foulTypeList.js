import React from 'react'
import styles from './showList.scss'

import { CommonLayout, ContentContainer, Title, TranslatedPage } from '../components/layout'
import { FoulTypeList } from '../components/games'
import { withTranslation } from '../lib/i18n'

class FoulTypeListPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('foulTypes')} />
        <ContentContainer>
          <main className={styles.list}>
            <h1>{t('foulTypes')}</h1>
            <FoulTypeList />
          </main>
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(FoulTypeListPage)
