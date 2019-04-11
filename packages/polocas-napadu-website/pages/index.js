import React from 'react'

import { withNamespaces } from '../lib/i18n'
import { ShowList } from '../components/shows'
import { CommonLayout, ContentContainer } from '../components/layout'

class HomePage extends React.Component {
  static getInitialProps () {
    return { namespacesRequired: ['navigation'] }
  }

  render () {
    const { t } = this.props

    return (
      <CommonLayout>
        <title>{`${t('projectName')} - ${t('projectNameAppendix')}`}</title>
        <ContentContainer>
          <ShowList />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withNamespaces(['navigation'])(HomePage)
