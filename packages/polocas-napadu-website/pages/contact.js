import React from 'react'
import Typography from '@material-ui/core/Typography'

import { withNamespaces } from '../lib/i18n'

import {
  CommonLayout,
  ContentContainer,
  SocialNetworks,
  UsualPlaces
} from '../components'

class ContactPage extends React.Component {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <ContentContainer>
          <Typography variant='h1'>
            {t('contact')}
          </Typography>
          <SocialNetworks inverse />
          <section>
            <Typography variant='h2'>
              {t('usualPlaces')}
            </Typography>
            <UsualPlaces />
          </section>
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withNamespaces(['navigation'])(ContactPage)
