import React from 'react'

import { CommonLayout, ContentContainer, Title, TranslatedPage } from '../components/layout'
import { GroupDescription, GroupHistoryBanner } from '../components/about'
import { ProfileGroupList } from '../components/profiles'
import { ShowsCounter } from '../components/shows'
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
          <ShowsCounter />
        </ContentContainer>
        <GroupHistoryBanner />
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(AboutPage)
