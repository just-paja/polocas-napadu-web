import React from 'react'

import { CommonLayout, ContentContainer, Title, TranslatedPage } from '../components/layout'
import { ContactUs, NgoContact } from '../components/about'
import { UsualPlaces } from '../components/locations'
import { withTranslation } from '../lib/i18n'

class ContactPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('contact')} />
        <ContentContainer>
          <h1>{t('contact')}</h1>
          <ContactUs />
          <UsualPlaces />

          <h2>{t('ngoContact')}</h2>
          <NgoContact />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(ContactPage)
