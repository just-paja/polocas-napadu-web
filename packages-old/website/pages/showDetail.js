import PropTypes from 'prop-types'
import React from 'react'

import { CommonLayout, TranslatedPage } from '../components/layout'
import { ShowDetail } from '../components/shows'
import { withTranslation } from '../lib/i18n'

class ShowDetailPage extends TranslatedPage {
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
        <ShowDetail variables={{ slug }} />
      </CommonLayout>
    )
  }
}

ShowDetailPage.propTypes = {
  slug: PropTypes.string.isRequired
}

export default withTranslation('common')(ShowDetailPage)
