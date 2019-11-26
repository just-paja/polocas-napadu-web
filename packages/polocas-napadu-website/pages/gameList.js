import React from 'react'
import styles from './showList.scss'

import { CommonLayout, ContentContainer, Title, TranslatedPage } from '../components/layout'
import { GameList } from '../components/games'
import { withTranslation } from '../lib/i18n'

class GameListPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('games')} />
        <ContentContainer>
          <main className={styles.list}>
            <h1>{t('games')}</h1>
            <GameList />
          </main>
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(GameListPage)
