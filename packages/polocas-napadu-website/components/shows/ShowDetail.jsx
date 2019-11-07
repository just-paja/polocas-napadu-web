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
import { FaCalendarDay, FaFacebookF, FaMapMarkerAlt, FaTicketAlt } from 'react-icons/fa'
import { gql } from 'apollo-boost'
import { Link } from '../bindings'
import { LogisticInfo } from './LogisticInfo'
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

function renderLink (link, children, Icon) {
  return link
    ? (
      <div>
        <a href={link} rel='external'>
          {Icon && <><Icon />{' '}</>}
          {children}
        </a>
      </div>
    ) : null
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
            <LogisticInfo
              icon={FaCalendarDay}
              summary={<EventStart end={show.end} start={show.start} />}
            >
              <AddToCalendar className={styles.addToCalendar} event={show} />
            </LogisticInfo>
          </Col>
          <Col className={styles.logisticsItem} md={6} lg={4}>
            <LogisticInfo
              icon={FaMapMarkerAlt}
              summary={<EventLocation location={show.location} />}
            >
              <Address address={show.location.address} city={show.location.city} />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${show.location.address}`}
                rel='external nofollow'
              >
                {t('howDoIGetThere')}
              </a>
            </LogisticInfo>
          </Col>
        </Row>
        <div className={styles.description}>
          <div>
            <div>
              {renderLink(show.linkReservations, t('reserveSeats'), FaTicketAlt)}
              {renderLink(show.linkTickets, t('buyTickets'), FaTicketAlt)}
              {renderLink(show.linkFacebook, t('eventOnFacebook'), FaFacebookF)}
            </div>
            <Markdown className='lead' source={show.description} />
            <Markdown source={show.showType.shortDescription} />
            {show.showType.visibility === 2 ? (
              <Link
                route='showFormatDetail'
                params={{ slug: show.showType.slug }}
              >
                <a>{t('moreAboutFormat', { formatName: show.showType.name })}</a>
              </Link>
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
