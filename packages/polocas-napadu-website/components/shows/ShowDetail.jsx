import moment from 'moment'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Head from 'next/head'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'
import styles from './ShowDetail.scss'

import { ContentContainer, PageHeading, Title } from '../layout'
import { Gallery } from '../photos'
import { ShowDateInfo } from './ShowDateInfo'
import { FaTicketAlt } from 'react-icons/fa'
import { gql } from 'apollo-boost'
import { Link } from '../bindings'
import { ShowVenueInfo } from './ShowVenueInfo'
import { MatchProgress } from './MatchProgress'
import { Show } from '../proptypes'
import { ShowParticipants } from './ShowParticipants'
import { withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const QUERY_SHOW = gql`
  query GetShow($slug: String!) {
    show(slug: $slug) {
      description
      id
      emailReservations
      linkFacebook
      linkReservations
      linkTickets
      location {
        address
        city
        id
        name
      }
      showType {
        id
        name
        shortDescription
        slug
        visibility
      }
      match {
        closed
        id
      }
      name
      photos {
        id
        description
        height
        image
        width
      }
      start
      showsParticipants {
        id
        profile {
          alias
          id
          name
          slug
          group {
            name
          }
        }
        role {
          id
          name
        }
      }
    }
  }
`

function LinkButton ({ link, icon: Icon, label }) {
  if (!link) {
    return null
  }
  return (
    <Col md={6} lg={4}>
      <Button className={styles.ticketsButton} href={link} variant='primary'>
        <FaTicketAlt />
        {label}
      </Button>
    </Col>
  )
}

function ShowDetailInner ({ data, t }) {
  const { show } = data
  return (
    <article>
      <PageHeading>
        <h1>{show.name}</h1>
        <Title text={show.name} />
        <Head>
          <meta property='event:end_date' content={show.end} />
          <meta property='event:start_date' content={show.start} />
          <meta property='og:description' content={show.description} />
          <meta property='og:type' content='event' />
        </Head>
      </PageHeading>
      <ContentContainer>
        <Row className={styles.logistics}>
          <Col className={styles.logisticsItem} md={6} lg={4}>
            <ShowDateInfo show={show} />
          </Col>
          <Col className={styles.logisticsItem} md={6} lg={4}>
            <ShowVenueInfo show={show} />
          </Col>
        </Row>
        {(show.linkTickets || show.linkReservations) &&
        moment().isBefore(show.start) ? (
          <Row className={styles.logistics}>
            <LinkButton
              link={show.linkTickets}
              label={t('buyTickets')}
              icon={FaTicketAlt}
            />
            <LinkButton
              link={show.linkReservations}
              label={t('reserveSeats')}
              icon={FaTicketAlt}
            />
          </Row>
        ) : null}
        <div className={styles.description}>
          <div>
            {show.description && (
              <Markdown className='lead' source={show.description} />
            )}
            <Markdown
              className={show.description ? null : 'lead'}
              source={show.showType.shortDescription}
            />
            {show.emailReservations ? (
              <p>
                {t('reserveSeatsEmail')}:{' '}
                <a href={`mailto:${show.emailReservations}`}>
                  {show.emailReservations}
                </a>
              </p>
            ) : null}
            {show.showType.visibility === 2 ? (
              <Link
                route='showFormatDetail'
                params={{ slug: show.showType.slug }}
              >
                <a>
                  {t('moreAboutFormat', { formatName: show.showType.name })}
                </a>
              </Link>
            ) : null}
            {show.match ? (
              <div>
                <h2>{t('matchProgress')}</h2>
                <MatchProgress
                  closed={show.match.closed}
                  variables={{ id: show.match.id }}
                />
              </div>
            ) : null}
            <h2>{t('showParticipants')}</h2>
            <ShowParticipants participants={show.showsParticipants} />
          </div>
        </div>
      </ContentContainer>
      <Gallery photos={show.photos} free />
    </article>
  )
}

ShowDetailInner.propTypes = {
  data: PropTypes.shape({
    show: Show.isRequired
  })
}

export const ShowDetail = withTranslation(['common'])(
  withQuery({ query: QUERY_SHOW })(ShowDetailInner)
)
