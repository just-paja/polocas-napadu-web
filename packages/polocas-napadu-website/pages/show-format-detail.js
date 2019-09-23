import React from 'react'

import { CommonLayout, TranslatedPage } from '../components/layout'
import { ShowFormatDetail } from '../components/shows'
import { withTranslation } from '../lib/i18n'

class ShowFormatDetailPage extends TranslatedPage {
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
        <ShowFormatDetail variables={{ slug }} />
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(ShowFormatDetailPage)
