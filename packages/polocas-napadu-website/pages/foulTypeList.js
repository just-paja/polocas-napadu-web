import Head from 'next/head'
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
        <Head>
          <meta property='og:description' content={t('foulTypesDescription')} />
          <meta property='og:type' content='article' />
        </Head>
        <ContentContainer>
          <main className={styles.list}>
            <h1>{t('foulTypes')}</h1>
            <p className='lead'>{t('foulTypesDescription')}</p>
            <FoulTypeList />
          </main>
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(FoulTypeListPage)
