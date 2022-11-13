import React from 'react'
import moment from 'moment'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import styles from './[slug].module.scss'

import { Button } from 'polocas-napadu-ui/Button.mjs'
import { compose, withQueryset } from 'polocas-napadu-ui/decorators.mjs'
import { Gallery } from '../../components/images.mjs'
import { gql } from '@apollo/client'
import { Heading, Section } from 'polocas-napadu-ui/content.mjs'
import { isVisible } from 'polocas-napadu-core/visibility.mjs'
import { Link } from '../../components/links.mjs'
import { Markdown } from '../../components/markdown.mjs'
import { MatchProgress } from '../../components/shows//MatchProgress'
import { OgEvent } from '../../components/opengraph.mjs'
import { Price } from 'polocas-napadu-ui/prices.mjs'
import { ShowDateInfo } from '../../components/shows/ShowDateInfo'
import { ShowParticipants } from '../../components/shows/ShowParticipants.mjs'
import { showQuery } from '../../graphql.mjs'
import { ShowVenueInfo } from '../../components/shows/ShowVenueInfo'
import { TicketsIcon } from 'polocas-napadu-ui/icons.mjs'
import { Title } from '../../components/meta.mjs'
import { withPageProps } from '../../pages.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'
import {
  CommonLayout,
  ContentContainer,
  PageHeading,
} from '../../components/layout'

function LinkButton({ href, label, ...props }) {
  if (!href) {
    return null
  }
  return (
    <div className="mt-2">
      <Button className={styles.ticketsButton} href={href} {...props}>
        {label}
      </Button>
    </div>
  )
}

const EventTicketButtons = withTranslation(({ event, t }) => {
  if (
    (event.linkTickets || event.linkReservations) &&
    moment().isBefore(event.start)
  ) {
    return (
      <div className="mt-3">
        <LinkButton
          href={event.linkTickets}
          label={t('buyTickets')}
          icon={<TicketsIcon />}
          variant="primary"
          size="lg"
        />
        <LinkButton
          href={event.linkReservations}
          label={t('reserveSeats')}
          icon={<TicketsIcon />}
          variant={event.linkTickets ? 'secondary' : 'primary'}
          size="lg"
        />
      </div>
    )
  }
  return null
})

const EventDetailHeading = ({ event }) => {
  const photo = event.showType.photos[0]
  return (
    <PageHeading backgroundImage={photo?.image}>
      <Heading>{event.name}</Heading>
      <Title text={event.name} description={event.description} />
      <OgEvent event={event} />
    </PageHeading>
  )
}

const EventDetailDescription = ({ event }) => (
  <Markdown className="lead" source={event.description} />
)

const ShowDetailDescription = ({ show }) => (
  <>
    <EventDetailDescription event={show} />
    <Markdown
      className={show.description ? null : 'lead'}
      source={show.showType.shortDescription}
    />
  </>
)

const ShowDetailTypeLink = withTranslation(({ showType, t }) => {
  if (isVisible(showType)) {
    return (
      <Link route="showFormatDetail" params={{ slug: showType.slug }}>
        {t('moreAboutFormat', { formatName: showType.name })}
      </Link>
    )
  }
  return null
})

const ShowDetailEmailReservations = withTranslation(({ show, t }) => {
  if (show.emailReservations) {
    return (
      <p>
        {t('reserveSeatsEmail')}:{' '}
        <Link href={`mailto:${show.emailReservations}`}>
          {show.emailReservations}
        </Link>
      </p>
    )
  }
  return null
})

const ShowDetailMatchReport = withTranslation(({ match, t }) => {
  if (match) {
    return (
      <Col as={Section} lg={6}>
        <h2>{t('matchProgress')}</h2>
        <MatchProgress closed={match.closed} matchId={match.id} />
      </Col>
    )
  }
  return null
})

const ShowDetailParticipants = withTranslation(({ participants, t }) => (
  <Col as={Section} lg={6}>
    <Heading>{t('showParticipants')}</Heading>
    <ShowParticipants participants={participants} />
  </Col>
))

export const getServerSideProps = compose(
  withPageProps,
  withQueryset({
    show: { query: gql(showQuery) },
  }),
  props => props
)

const TicketPrice = ({ price }) => (
  <div key={price.id}>
    {price.priceLevel.name}:{' '}
    <Price key={price.id} amount={price.amount} currency={price.currency} />
  </div>
)

const EventPrices = withTranslation(({ prices, t }) => (
  <Section className="mt-3">
    <Heading className="mt-0">{t('ticket-price')}</Heading>
    <div className="mt-2">
      {prices.map(price => (
        <TicketPrice price={price} key={price.id} />
      ))}
    </div>
  </Section>
))

export default function ShowDetail({ show }) {
  return (
    <CommonLayout>
      <Section as="article">
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
          <Row className={styles.logistics}>
            <Col md={10} lg={7}>
              <Row>
                <Col md={6} xl={5}>
                  <EventTicketButtons event={show} />
                </Col>
                {show.ticketPrices.length !== 0 && (
                  <Col>
                    <EventPrices prices={show.ticketPrices} />
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
          <div className={styles.description}>
            <div>
              <ShowDetailDescription show={show} />
              <ShowDetailEmailReservations show={show} />
              <ShowDetailTypeLink showType={show.showType} />
            </div>
          </div>
          <Row className="justify-content-center">
            <ShowDetailMatchReport match={show.match} />
            <ShowDetailParticipants participants={show.participants} />
          </Row>
        </ContentContainer>
        <Gallery photos={show.photos} free />
      </Section>
    </CommonLayout>
  )
}
