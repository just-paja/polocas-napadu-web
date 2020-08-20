import React from 'react'
import styles from './showList.module.scss'

import { Link } from '../components/bindings'

import {
  CommonLayout,
  ContentContainer,
  Title,
  TranslatedPage
} from '../components/layout'
import {
  FutureShowList,
  HomeStageNotice,
  RecentShowList
} from '../components/shows'
import { withTranslation } from '../lib/i18n'

class ShowListPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('shows')} />
        <ContentContainer>
          <main className={styles.list}>
            <h1>{t('showArchive')}</h1>
            <RecentShowList variables={{ limit: 20 }} />
          </main>
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(ShowListPage)
