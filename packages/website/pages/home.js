import Col from 'react-bootstrap/Col'
import React from 'react'
import Row from 'react-bootstrap/Row'
import styles from './home.module.scss'

import { BriefFutureShowList } from '../components/shows/BriefFutureShowList.mjs'
import { ContentContainer, Footer, MainMenu } from '../components/layout'
import { HomeBanner } from '../components/about'
import { OgImage } from '../components/opengraph.mjs'
import { Title } from '../components/meta.mjs'
import { compose, withQueryset } from 'polocas-napadu-ui/decorators.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'
import { withPageProps } from '../pages.mjs'
import { showListQuery, showPhotosQuery } from '../graphql.mjs'
import { gql } from '@apollo/client'

export const getServerSideProps = compose(
  withPageProps,
  withQueryset({
    showPhotos: { query: gql(showPhotosQuery) },
    shows: { query: gql(showListQuery), variables: { future: true } },
  }),
  props => props
)

export default withTranslation(({ showList, t }) => (
  <>
    <Title
      text={`${t('projectName')} - ${t('projectNameAppendix')}`}
      description={t('projectAbout')}
      pure
    />
    <OgImage src="/static/pixmaps/og-main.jpg" />
    <MainMenu />
    <HomeBanner />
    <ContentContainer className={styles.content}>
      <Row>
        <Col>
          <h2>{t('upcomingShows')}</h2>
          <BriefFutureShowList shows={showList} />
        </Col>
      </Row>
    </ContentContainer>
    <Footer sponsors={[]} />
  </>
))
