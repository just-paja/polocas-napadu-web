import moment from 'moment'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'
import styles from './ShowDetail.module.scss'

import { ContentContainer, PageHeading, Title } from '../layout'
import { Gallery } from '../photos'
import { ShowDateInfo } from './ShowDateInfo'
import { FaTicketAlt } from 'react-icons/fa'
import { gql } from 'apollo-boost'
import { Link } from '../bindings'
import { OgEvent } from '../social'
import { ShowVenueInfo } from './ShowVenueInfo'
import { MatchProgress } from './MatchProgress'
import { Show } from 'polocas-napadu-core/proptypes'
import { ShowParticipants } from './ShowParticipants'
import { withTranslation } from '../../lib/i18n'
import {
  eventParticipantQuery,
  locationQuery,
  photoQuery,
  showTypeQuery,
  withQuery
} from '../graphql'

const QUERY_SHOW = gql`
  query GetShow($slug: String!) {
    show(slug: $slug) {
      description
      id
      emailReservations
      linkFacebook
      linkReservations
      linkTickets
      location ${locationQuery}
      showType ${showTypeQuery}
      match {
        closed
        id
      }
      name
      photos ${photoQuery}
      start
      participants ${eventParticipantQuery}
      ticketPrices {
        id,
        amount,
        currency,
        priceLevel {
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

function EventTicketButtons ({ event, t }) {
  if (
    (event.linkTickets || event.linkReservations) &&
    moment().isBefore(event.start)
  ) {
    return (
      <Row className={styles.logistics}>
        <LinkButton
          link={event.linkTickets}
          label={t('buyTickets')}
          icon={FaTicketAlt}
        />
        <LinkButton
          link={event.linkReservations}
          label={t('reserveSeats')}
          icon={FaTicketAlt}
        />
      </Row>
    )
  }
  return null
}

function EventDetailHeading ({ event }) {
  return (
    <PageHeading>
      <h1>{event.name}</h1>
      <Title text={event.name} description={event.description} />
      <OgEvent event={event} />
    </PageHeading>
  )
}

function EventDetailDescription ({ event }) {
  if (event.description) {
    return <Markdown className='lead' source={event.description} />
  }
  return null
}

function ShowDetailDescription ({ show }) {
  return (
    <>
      <EventDetailDescription event={show} />
      <Markdown
        className={show.description ? null : 'lead'}
        source={show.showType.shortDescription}
      />
    </>
  )
}

function ShowDetailTypeLink ({ showType, t }) {
  if (showType.visibility === 2) {
    return (
      <Link route='showFormatDetail' params={{ slug: showType.slug }}>
        <a>{t('moreAboutFormat', { formatName: showType.name })}</a>
      </Link>
    )
  }
  return null
}

function ShowDetailEmailReservations ({ show, t }) {
  if (show.emailReservations) {
    return (
      <p>
        {t('reserveSeatsEmail')}:{' '}
        <a href={`mailto:${show.emailReservations}`}>
          {show.emailReservations}
        </a>
      </p>
    )
  }
  return null
}

function ShowDetailMatchReport ({ match, t }) {
  if (match) {
    return (
      <div>
        <h2>{t('matchProgress')}</h2>
        <MatchProgress closed={match.closed} variables={{ id: match.id }} />
      </div>
    )
  }
  return null
}

function ShowDetailParticipants ({ participants, t }) {
  return (
    <>
      <h2>{t('showParticipants')}</h2>
      <ShowParticipants participants={participants} />
    </>
  )
}

function ShowDetailInner ({ data, t }) {
  const { show } = data
  return (
    <article>
      <EventDetailHeading event={show} />
      <ContentContainer>
        <Row className={styles.logistics}>
          <Col className={styles.logisticsItem} md={6} lg={4}>
            <ShowDateInfo show={show} />
          </Col>
          <Col className={styles.logisticsItem} md={6} lg={4}>
            <ShowVenueInfo show={show} />
          </Col>
        </Row>
        <EventTicketButtons event={show} t={t} />
        <div className={styles.description}>
          <div>
            <ShowDetailDescription show={show} />
            <ShowDetailEmailReservations show={show} t={t} />
            <ShowDetailTypeLink showType={show.showType} t={t} />
            <ShowDetailMatchReport match={show.match} />
            <ShowDetailParticipants participants={show.participants} t={t} />
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
