import Col from 'react-bootstrap/Col'
import React from 'react'
import Row from 'react-bootstrap/Row'
import styles from './home.module.scss'

import { BriefFutureShowList } from '../components/shows'
import {
  ContentContainer,
  Footer,
  MainMenu,
  Title,
  TranslatedPage
} from '../components/layout'
import { OgImage } from '../components/social'
import { HomeBanner } from '../components/about'
import { withTranslation } from '../lib/i18n'

class HomePage extends TranslatedPage {
  render () {
    const { t } = this.props
    return (
      <>
        <Title
          text={`${t('projectName')} - ${t('projectNameAppendix')}`}
          description={t('projectAbout')}
          pure
        />
        <OgImage src='/static/pixmaps/og-main.jpg' />
        <MainMenu />
        <HomeBanner />
        <ContentContainer className={styles.content}>
          <Row>
            <Col>
              <h2>{t('upcomingShows')}</h2>
              <BriefFutureShowList />
            </Col>
          </Row>
        </ContentContainer>
        <Footer />
      </>
    )
  }
}

export default withTranslation('common')(HomePage)
