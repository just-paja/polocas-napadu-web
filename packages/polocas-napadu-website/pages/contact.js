import Col from 'react-bootstrap/Col'
import React from 'react'
import Row from 'react-bootstrap/Row'

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

class ContactPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('contact')} />
        <ContentContainer>
          <h1>{t('contact')}</h1>
          <ContactUs />
          <h2>{t('usualPlaces')}</h2>
          <UsualPlaces />
          <h2>{t('ngoContact')}</h2>
          <NgoContact />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withNamespaces('navigation')(ContactPage)
