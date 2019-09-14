import Col from 'react-bootstrap/Col'
import React from 'react'
import Row from 'react-bootstrap/Row'

import { CommonLayout, ContentContainer, Title, TranslatedPage } from '../components/layout'
import { FutureShowList, HomeStageNotice, RecentShowList } from '../components/shows'
import { withTranslation } from '../lib/i18n'

class ShowListPage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <CommonLayout>
        <Title text={t('shows')} />
        <ContentContainer>
          <h1>{t('shows')}</h1>
          <HomeStageNotice />
          <Row>
            <Col as='main' lg={8} xl={7}>
              <FutureShowList />
              <RecentShowList />
            </Col>
            <Col as='aside' lg={4} xl={5}>
              <h2>Co hrajeme</h2>
            </Col>
          </Row>
        </ContentContainer>
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(ShowListPage)
