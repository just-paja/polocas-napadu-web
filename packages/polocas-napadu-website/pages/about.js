import React from 'react'

import { CommonLayout, ContentContainer, Title, TranslatedPage } from '../components/layout'
import { ProfileGroupList } from '../components/profiles'
import { GroupDescription, GroupHistory } from '../components/about'
import { withTranslation } from '../lib/i18n'

class AboutPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('about')} />
        <ContentContainer>
          <GroupDescription />
        </ContentContainer>
        <ProfileGroupList />
        <ContentContainer>
          <GroupHistory />
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(AboutPage)
