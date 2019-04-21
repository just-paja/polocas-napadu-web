import PropTypes from 'prop-types'
import React from 'react'

import { TranslatedPage } from './TranslatedPage'
import { withNamespaces } from '../lib/i18n'
import {
  CommonLayout,
  ContentContainer,
  ShowDetail
} from '../components'

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
        <ContentContainer>
          <ShowDetail variables={{ slug }} />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

ShowDetailPage.propTypes = {
  slug: PropTypes.string.isRequired
}

export default withNamespaces('common')(ShowDetailPage)
