import React from 'react'

import { withNamespaces } from '../lib/i18n'

import {
  CommonLayout,
  ContentContainer,
  GroupDescription
} from '../components'

class AboutPage extends React.Component {
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

export default withNamespaces(['common'])(AboutPage)
