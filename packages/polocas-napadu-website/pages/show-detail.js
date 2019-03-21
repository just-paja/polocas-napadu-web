import PropTypes from 'prop-types'
import React from 'react'

import { CommonLayout, ContentContainer } from '../components/layout'
import { withNamespaces } from '../lib/i18n'
import { ShowDetail } from '../components/shows'

class ShowDetailPage extends React.Component {
  static getInitialProps (context) {
    return {
      namespacesRequired: ['common'],
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

export default withNamespaces(['common'])(ShowDetailPage)
