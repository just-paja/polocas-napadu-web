import React from 'react'

import { withNamespaces } from '../lib/i18n'
import { ShowList } from '../components/shows'
import { CommonLayout } from '../components/layout'

class HomePage extends React.Component {
  static getInitialProps () {
    return { namespacesRequired: ['common'] }
  }

  render () {
    return (
      <CommonLayout>
        Home
        <ShowList />
      </CommonLayout>
    )
  }
}

export default withNamespaces(['common'])(HomePage)
