import Head from 'next/head'
import React from 'react'
import styles from './showList.module.scss'

import {
  CommonLayout,
  ContentContainer,
  Title,
  TranslatedPage
} from '../components/layout'
import { GameList } from '../components/games'
import { withTranslation } from '../lib/i18n'

class GameListPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('games')} />
        <Head>
          <meta property='og:description' content={t('gameListDescription')} />
          <meta property='og:type' content='article' />
        </Head>
        <ContentContainer>
          <main className={styles.list}>
            <h1>{t('games')}</h1>
            <p className='lead'>{t('gameListDescription')}</p>
            <GameList />
          </main>
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(GameListPage)
