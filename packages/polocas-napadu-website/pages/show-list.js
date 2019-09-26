import React from 'react'
import styles from './show-list.scss'

import { CommonLayout, ContentContainer, Title, TranslatedPage } from '../components/layout'
import { FutureShowList, HomeStageNotice, RecentShowList } from '../components/shows'
import { withTranslation } from '../lib/i18n'

class ShowListPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('shows')} />
        <ContentContainer>
          <main className={styles.list}>
            <h1>{t('shows')}</h1>
            <HomeStageNotice />
            <FutureShowList />
            <RecentShowList />
            <p>Více naleznete v <a href=''>archivu</a></p>
          </main>
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(ShowListPage)
