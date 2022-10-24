import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { Heading, Main } from 'polocas-napadu-ui/content.mjs'
import { CommonLayout, ContentContainer } from '../components/layout'
import { compose, withQueryset } from 'polocas-napadu-ui/decorators.mjs'
import { ContactUs, NgoContact } from '../components/about'
import { gql } from '@apollo/client'
import { Title } from '../components/meta.mjs'
import { UsualPlaces } from '../components/locations'
import { usualPlacesQuery } from '../graphql.mjs'
import { withPageProps } from '../pages.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'

export const getServerSideProps = compose(
  withPageProps,
  withQueryset({
    usualPlaces: { query: gql(usualPlacesQuery), variables: { future: true } },
  }),
  props => props
)

export default withTranslation(({ usualPlaceList, t }) => (
  <CommonLayout>
    <Title text={t('contact')} description={t('contactText')} />
    <ContentContainer>
      <Heading>{t('contact')}</Heading>
      <Main>
        <Row>
          <Col md={6} lg={4}>
            <ContactUs vertical />
          </Col>
          <Col md={6} lg={4}>
            <UsualPlaces places={usualPlaceList} />
          </Col>
          <Col md={6} lg={4}>
            <NgoContact />
          </Col>
        </Row>
      </Main>
    </ContentContainer>
  </CommonLayout>
))
