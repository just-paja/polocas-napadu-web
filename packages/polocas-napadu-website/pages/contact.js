import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'

import { TranslatedPage } from './TranslatedPage'
import { withNamespaces } from '../lib/i18n'
import {
  CommonLayout,
  ContactUs,
  ContentContainer,
  NgoContact,
  Title,
  UsualPlaces
} from '../components'

const gridIt = children => (
  <Grid
    alignItems='center'
    component='section'
    container
    direction='column'
  >
    {children}
  </Grid>
)

class ContactPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('contact')} />
        <ContentContainer>
          {gridIt(
            <React.Fragment>
              <Typography variant='h1'>{t('contact')}</Typography>
              <ContactUs />
            </React.Fragment>
          )}
          {gridIt(
            <React.Fragment>
              <Typography variant='h2'>{t('usualPlaces')}</Typography>
              <UsualPlaces />
            </React.Fragment>
          )}
          {gridIt(
            <React.Fragment>
              <Typography variant='h2'>{t('ngoContact')}</Typography>
              <NgoContact />
            </React.Fragment>
          )}
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withNamespaces('navigation')(ContactPage)
