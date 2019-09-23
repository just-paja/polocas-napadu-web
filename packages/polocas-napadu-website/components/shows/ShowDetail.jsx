import Col from 'react-bootstrap/Col'
import Head from 'next/head'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'

import { EventLocation, EventStart } from '../events'
import { FaFacebookF, FaTicketAlt } from 'react-icons/fa'
import { gql } from 'apollo-boost'
import { Link } from '../bindings'
import { Show } from '../proptypes'
import { ShowParticipants } from './ShowParticipants'
import { Title } from '../layout'
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
        id,
        name,
      },
      showType {
        id,
        name,
        shortDescription,
        slug,
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
        <a href={link}>
          {Icon && <><Icon />{' '}</>}
          {children}
        </a>
      </div>
    ) : null
}

function ShowDetailInner ({ data, t }) {
  const { show } = data
  return (
    <>
      <Title text={show.name} />
      <Head>
        <meta property='event:end_date' content={show.end} />
        <meta property='event:start_date' content={show.start} />
        <meta property='og:description' content={show.description} />
        <meta property='og:type' content='event' />
      </Head>
      <h1>{show.name}</h1>
      <Row>
        <Col lg={6}>
          <p>
            <EventStart end={show.end} start={show.start} /><br />
            <EventLocation location={show.location} />
          </p>
          <div>
            {renderLink(show.linkReservations, t('reserveSeats'), FaTicketAlt)}
            {renderLink(show.linkTickets, t('buyTickets'), FaTicketAlt)}
            {renderLink(show.linkFacebook, t('eventOnFacebook'), FaFacebookF)}
          </div>
          <Markdown source={show.description} />
          <div>
            <h2>{show.showType.name}</h2>
            <Markdown source={show.showType.shortDescription} />
            <Link route='showFormatDetail' params={{ slug: show.showType.slug }}>
              <a>{t('moreAboutFormat', { formatName: show.showType.name })}</a>
            </Link>
          </div>
        </Col>
        <Col lg={6}>
          <h2>{t('showParticipants')}</h2>
          <ShowParticipants participants={show.showsParticipants} />
        </Col>
      </Row>
    </>
  )
}

ShowDetailInner.propTypes = {
  data: PropTypes.shape({
    show: Show.isRequired
  })
}

export const ShowDetail = withTranslation(['common'])(withQuery({ query: QUERY_SHOW })(ShowDetailInner))
