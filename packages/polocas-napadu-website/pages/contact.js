import Col from 'react-bootstrap/Col'
import React from 'react'
import Row from 'react-bootstrap/Row'

import {
  CommonLayout,
  ContentContainer,
  Title,
  TranslatedPage
} from '../components/layout'
import { ContactUs, NgoContact } from '../components/about'
import { UsualPlaces } from '../components/locations'
import { withTranslation } from '../lib/i18n'

class ContactPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('contact')} description={t('contactText')} />
        <ContentContainer>
          <h1>{t('contact')}</h1>
          <ContactUs />
          <Row>
            <Col md={6}>
              <UsualPlaces />
            </Col>
            <Col md={6}>
              <h2>{t('ngoContact')}</h2>
              <NgoContact />
            </Col>
          </Row>
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(ContactPage)
