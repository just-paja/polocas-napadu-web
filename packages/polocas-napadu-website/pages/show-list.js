import React from 'react'

import { CommonLayout, ContentContainer } from '../components/layout'
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
        <ContentContainer>
          <ShowList />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withNamespaces(['common'])(ShowListPage)
