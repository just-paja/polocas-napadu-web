import React from 'react'
import Typography from '@material-ui/core/Typography'

import { TranslatedPage } from './TranslatedPage'
import { withNamespaces } from '../lib/i18n'
import {
  CommonLayout,
  ContentContainer,
  ShowList,
  Title
} from '../components'

class HomePage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title
          text={`${t('projectName')} - ${t('projectNameAppendix')}`}
          pure
        />
        <ContentContainer>
          <Typography variant='h1'>Home page</Typography>
          <ShowList />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withNamespaces('navigation')(HomePage)
