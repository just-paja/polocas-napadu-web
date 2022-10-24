import Alert from 'react-bootstrap/Alert'
import classnames from 'classnames'
import React from 'react'
import styles from './MonthShowList.module.scss'

import { Heading, Section } from 'polocas-napadu-ui/content.mjs'
import { isLive, isPast, EventLocation, EventStart } from '../events.mjs'
import { Link } from '../links.mjs'
import { TicketButtons } from './TicketButtons.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n'
import { PriceSummary } from '../prices.mjs'
import {
  LocationIcon,
  LogisticsIcon,
  ShowFormatIcon,
  TicketsIcon,
} from 'polocas-napadu-ui/icons.mjs'

const ListItem = ({ show }) => {
  return (
    <Section
      as="article"
      className={classnames('row', styles.event, {
        [styles.past]: isPast(show),
        [styles.live]: isLive(show),
      })}
    >
      <Heading>
        <Link route="showDetail" params={{ slug: show.slug }}>
          {show.name}
        </Link>
      </Heading>
      <div className="mt-2">
        <div>
          <LogisticsIcon /> <EventStart start={show.start} />
        </div>
        <div>
          <LocationIcon />{' '}
          {show.location && <EventLocation location={show.location} />}
        </div>
        <div>
          <ShowFormatIcon />{' '}
          <Link route="showFormatDetail" params={{ slug: show.showType.slug }}>
            {show.showType.name}
          </Link>
        </div>
        {show.ticketPrices.length !== 0 && (
          <div>
            <TicketsIcon /> <PriceSummary prices={show.ticketPrices} />
          </div>
        )}
      </div>
      <TicketButtons event={show} />
    </Section>
  )
}

const NoFutureShows = withTranslation(({ t }) => (
  <Alert className="mt-3" variant="light">
    {t('noShowsPlanned')}
  </Alert>
))

export const MonthShowList = ({ shows }) => {
  return (
    <div>
      {shows.length ? (
        shows.map(show => <ListItem key={show.id} show={show} />)
      ) : (
        <NoFutureShows />
      )}
    </div>
  )
}
