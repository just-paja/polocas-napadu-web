import moment from 'moment'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import React from 'react'

import { openExternalUrl } from './links.mjs'
import { qsm } from 'query-string-manipulator'
import { withTranslation } from 'polocas-napadu-ui/i18n'

const dateFormat = 'YYYYMMDDTHHmmss\\Z'

const typicalEventLength = 2
const numberBase = 10

const padLeft = number => (number < numberBase ? `0${number}` : number)
const getEnd = (start, end) =>
  end ? moment(end) : moment(start).add(typicalEventLength, 'hour')

function getGoogleLink(event) {
  const start = moment(event.start).utc().format(dateFormat)
  return qsm('https://www.google.com/calendar/render', {
    set: {
      action: 'TEMPLATE',
      text: event.name,
      dates: [start, getEnd(event.start, event.end).utc().format(dateFormat)]
        .filter(Boolean)
        .join('/'),
      details: event.description,
      location: event.location && event.location.address,
    },
  })
}

function getDuration(start, end) {
  const duration = moment.duration(
    moment(end).diff(start, 'minutes'),
    'minutes'
  )
  return `${padLeft(duration.hours())}${padLeft(duration.minutes())}`
}

function getYahooLink(event) {
  return qsm('http://calendar.yahoo.com/', {
    set: {
      v: 60,
      view: 'd',
      type: 20,
      title: event.name,
      st: moment(event.start).utc().format(dateFormat),
      dur: getDuration(event.start, getEnd(event.start, event.end)),
      desc: event.description,
      // eslint-disable-next-line camelcase
      in_loc: event.location && event.location.address,
    },
  })
}

const getUrl = event => ''

function getICalLink(event) {
  return [
    'data:text/calendar;charset=utf8,BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `URL:${getUrl(event)}`,
    `DTSTART:${moment(event.start).utc().format(dateFormat)}`,
    `DTEND:${getEnd(event.start, event.end).utc().format(dateFormat)}`,
    `SUMMARY:${event.name}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location && event.location.address}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('%0A')
}

export const AddToCalendar = withTranslation(({ className, event, t }) => (
  <NavDropdown className={className} title={t('addToCalendar')}>
    <NavDropdown.Item href={getGoogleLink(event)} onClick={openExternalUrl}>
      {t('googleCalendar')}
    </NavDropdown.Item>
    <NavDropdown.Item href={getYahooLink(event)} onClick={openExternalUrl}>
      {t('yahooCalendar')}
    </NavDropdown.Item>
    <NavDropdown.Item href={getICalLink(event)} onClick={openExternalUrl}>
      {t('iCalFile')}
    </NavDropdown.Item>
  </NavDropdown>
))
