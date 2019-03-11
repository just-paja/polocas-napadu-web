import React from 'react'

import { withNamespaces } from '../lib/i18n'
import { ShowList } from '../components/shows'

class HomePage extends React.Component {
  static getInitialProps () {
    return { namespacesRequired: ['common'] }
  }

  render () {
    return (
      <ShowList />
    )
  }
}

export default withNamespaces(['common'])(HomePage)
