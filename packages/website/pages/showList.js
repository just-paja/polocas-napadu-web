import Col from 'react-bootstrap/Col'
import moment from 'moment'
import React from 'react'
import Row from 'react-bootstrap/Row'
import styles from './showList.module.scss'

import { AboutImprovLarge } from '../components/about/AboutImprov.mjs'
import { gql } from '@apollo/client'
import { CommonLayout, ContentContainer } from '../components/layout'
import { Title } from '../components/meta.mjs'
import { HomeStageNotice } from '../components/shows/HomeStageNotice.mjs'
import { MonthShowList } from '../components/shows/MonthShowList.mjs'
import { OgImage } from '../components/opengraph.mjs'
import { showListQuery, usualPlacesQuery } from '../graphql.mjs'
import { withTranslation } from '@polocas-napadu/ui/i18n.mjs'
import { compose, withQueryset } from '@polocas-napadu/ui/decorators.mjs'
import { withPageProps } from '../pages.mjs'
import { Heading, Main } from '@polocas-napadu/ui/content.mjs'
import { EventFilter } from '../components/events.mjs'

const withSelectedMonth = fn => props => {
  const { month } = props.query
  return fn({
    props: {
      ...props.props,
      month: month || moment().format('YYYY-MM'),
    },
  })
}

export const getServerSideProps = compose(
  withPageProps,
  withSelectedMonth,
  withQueryset({
    shows: props => ({
      query: gql(showListQuery),
      variables: {
        month: props.props.month,
      },
    }),
    usualPlaces: { query: gql(usualPlacesQuery) },
  }),
  props => props
)

export default compose(
  withTranslation,
  ({ month, showList, usualPlaceList, t }) => {
    return (
      <CommonLayout>
        <Title text={t('shows')} description={t('showsInvite')} />
        <OgImage src="/static/pixmaps/og-show-list.jpg" />
        <ContentContainer>
          <Main className={styles.list}>
            <Heading>{t('shows')}</Heading>
            <Row>
              <Col md={12} lg={7}>
                <EventFilter values={{ month }} />
                <MonthShowList shows={showList} />
                <HomeStageNotice usualPlaces={usualPlaceList} />
              </Col>
              <Col md={12} lg={5}>
                <AboutImprovLarge />
              </Col>
            </Row>
          </Main>
        </ContentContainer>
      </CommonLayout>
    )
  }
)
