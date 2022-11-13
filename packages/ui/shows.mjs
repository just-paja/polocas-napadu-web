import React from 'react'

import { EventStart, EventLocation } from './events.mjs'
import { PriceSummary } from './prices.mjs'
import {
  LocationIcon,
  LogisticsIcon,
  ShowFormatIcon,
  TicketsIcon,
} from './icons.mjs'

export const ShowStart = ({ show }) => (
  <>
    <LogisticsIcon /> <EventStart start={show.start} />
  </>
)

export const ShowLocation = ({ show }) => (
  <>
    <LocationIcon />{' '}
    {show.location ? <EventLocation location={show.location} /> : null}
  </>
)

export const ShowFormat = ({ show }) => (
  <>
    <ShowFormatIcon /> {show.showType.name}
  </>
)

export const ShowTicketPriceSummary = ({ show }) => (
  <>
    <TicketsIcon /> <PriceSummary prices={show.ticketPrices} />
  </>
)
