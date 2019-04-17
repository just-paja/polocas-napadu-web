import PropTypes from 'prop-types'
import React from 'react'

import { withNamespaces } from '../lib/i18n'

import {
  CommonLayout,
  ContentContainer,
  GroupDescription
} from '../components'

class ShowDetailPage extends React.Component {
  render () {
    return (
      <CommonLayout>
        <ContentContainer>
          <GroupDescription />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

ShowDetailPage.propTypes = {
  slug: PropTypes.string.isRequired
}

export default withNamespaces(['common'])(ShowDetailPage)
