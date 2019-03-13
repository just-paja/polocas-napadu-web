import PropTypes from 'prop-types'
import React from 'react'

import { CommonLayout } from '../components/layout'
import { ShowList } from '../components/shows'
import { withNamespaces } from '../lib/i18n'

class ShowListPage extends React.Component {
  static getInitialProps (context) {
    return {
      namespacesRequired: ['common']
    }
  }

  render () {
    return (
      <CommonLayout>
        <ShowList />
      </CommonLayout>
    )
  }
}

ShowListPage.propTypes = {
  slug: PropTypes.string.isRequired
}

export default withNamespaces(['common'])(ShowListPage)
