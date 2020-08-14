import React from 'react'
import styles from './showList.module.scss'

import { CommonLayout, ContentContainer, TranslatedPage } from '../components/layout'
import { GameDetail } from '../components/games'
import { withTranslation } from '../lib/i18n'

class GameDetailPage extends TranslatedPage {
  static getInitialProps (context) {
    const initialProps = super.getInitialProps(context)
    return {
      ...initialProps,
      slug: context.query.slug
    }
  }

  render () {
    const { slug } = this.props
    return (
      <CommonLayout>
        <ContentContainer>
          <main className={styles.list}>
            <GameDetail variables={{ slug }} />
          </main>
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(GameDetailPage)
