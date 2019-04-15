import React from 'react'
import Typography from '@material-ui/core/Typography'

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
          <Typography variant='h1'>Home page</Typography>
          <ShowList />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withNamespaces(['navigation'])(HomePage)
