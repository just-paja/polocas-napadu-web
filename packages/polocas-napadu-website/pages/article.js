import React from 'react'

import { CommonLayout, TranslatedPage } from '../components/layout'
import { Article } from '../components/text'
import { withTranslation } from '../lib/i18n'

class ArticlePage extends TranslatedPage {
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
        <Article variables={{ slug }} />
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(ArticlePage)
