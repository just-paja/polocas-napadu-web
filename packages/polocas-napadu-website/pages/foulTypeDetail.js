import React from 'react'
import styles from './showList.module.scss'

import { CommonLayout, ContentContainer, TranslatedPage } from '../components/layout'
import { FoulTypeDetail } from '../components/games'
import { withTranslation } from '../lib/i18n'

class FoulTypeDetailPage extends TranslatedPage {
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
            <FoulTypeDetail variables={{ slug }} />
          </main>
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(FoulTypeDetailPage)
