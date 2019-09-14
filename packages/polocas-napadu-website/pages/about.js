import React from 'react'

import { CommonLayout, ContentContainer, Title, TranslatedPage } from '../components/layout'
import { ProfileGroupList } from '../components/profiles'
import { GroupDescription } from '../components/about'
import { withTranslation } from '../lib/i18n'

class AboutPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <ContentContainer>
          <Title text={t('about')} />
          <GroupDescription />
        </ContentContainer>
        <ProfileGroupList />
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(AboutPage)
