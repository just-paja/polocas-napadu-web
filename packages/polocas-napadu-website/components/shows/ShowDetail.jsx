import moment from 'moment'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Head from 'next/head'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'
import styles from './ShowDetail.scss'

import { Address } from '../locations'
import { ContentContainer, PageHeading, Title } from '../layout'
import { AddToCalendar, EventLocation, EventStart } from '../events'
import { FaCalendarDay, FaFacebookSquare, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa'
import { gql } from 'apollo-boost'
import { Link } from '../bindings'
import { LogisticInfo } from './LogisticInfo'
import { MatchProgress } from './MatchProgress'
import { Show } from '../proptypes'
import { ShowParticipants } from './ShowParticipants'
import { withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const QUERY_SHOW = gql`
  query GetShow($slug: String!) {
    show(slug: $slug) {
      description,
      id,
      linkFacebook,
      linkReservations,
      linkTickets,
      location {
        address,
        city,
        id,
        name,
      },
      showType {
        id,
        name,
        shortDescription,
        slug,
        visibility
      },
      match {
        closed,
        id,
      },
      name,
      start,
      showsParticipants {
        id,
        profile {
          alias,
          id,
          name,
          slug,
          group {
            name
          }
        },
        role {
          id,
          name,
        }
      }
    }
  }
`

function ExternalLink ({ children, href }) {
  const open = (e) => {
    e.preventDefault()
    window.open(href)
  }
  return (
    <a href={href} rel='external' onClick={open}>
      {children}
    </a>
  )
}

function renderLink (link, children, Icon) {
  return link
    ? (
      <div>
        <ExternalLink href={link}>
          {Icon && <><Icon />{' '}</>}
          {children}
        </ExternalLink>
      </div>
    ) : null
}

function ShowDetailInner ({ data, t }) {
  const { show } = data
  const ticketsLink = show.linkTickets || show.linkReservations
  const ticketsLabel = show.linkTickets ? 'buyTickets' : 'reserveSeats'
  const ticketsButton = ticketsLink && moment().isBefore(show.start) ? (
    <Button className={styles.ticketsButton} href={ticketsLink} variant='primary'>
      <FaTicketAlt />
      {t(ticketsLabel)}
    </Button>
  ) : null
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
            <LogisticInfo
              icon={FaCalendarDay}
              summary={<EventStart end={show.end} start={show.start} />}
            >
              {renderLink(show.linkFacebook, t('eventOnFacebook'), FaFacebookSquare)}
              <AddToCalendar className={styles.addToCalendar} event={show} />
            </LogisticInfo>
          </Col>
          <Col className={styles.logisticsItem} md={6} lg={4}>
            <LogisticInfo
              icon={FaMapMarkerAlt}
              summary={<EventLocation location={show.location} />}
            >
              <Address address={show.location.address} city={show.location.city} />
              <ExternalLink
                href={`https://www.google.com/maps/dir/?api=1&destination=${show.location.address}`}
              >
                {t('howDoIGetThere')}
              </ExternalLink>
            </LogisticInfo>
          </Col>
        </Row>
        {ticketsButton ? (
          <Row className={styles.logistics}>
            <Col md={6} lg={4}>
              {ticketsButton}
            </Col>
          </Row>
        ) : null}
        <div className={styles.description}>
          <div>
            {show.description && <Markdown className='lead' source={show.description} />}
            <Markdown className={show.description ? null : 'lead'} source={show.showType.shortDescription} />
            {show.showType.visibility === 2 ? (
              <Link
                route='showFormatDetail'
                params={{ slug: show.showType.slug }}
              >
                <a>{t('moreAboutFormat', { formatName: show.showType.name })}</a>
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
    </article>
  )
}

ShowDetailInner.propTypes = {
  data: PropTypes.shape({
    show: Show.isRequired
  })
}

export const ShowDetail = withTranslation(['common'])(withQuery({ query: QUERY_SHOW })(ShowDetailInner))
