import moment from 'moment'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import qsm from 'query-string-manipulator'
import React from 'react'

import { ClassName, Show } from '../proptypes'
import { withTranslation } from '../../lib/i18n'

function nonEmpty (item) {
  return Boolean(item)
}

const dateFormat = 'YYYYMMDDTHHmmss\\Z'

function getEnd (start, end) {
  return end
    ? moment(end)
    : moment(start).add(2, 'hour')
}

function getGoogleLink (event) {
  const start = moment(event.start).utc().format(dateFormat)
  return qsm('https://www.google.com/calendar/render', {
    set: {
      action: 'TEMPLATE',
      text: event.name,
      dates: [
        start,
        getEnd(event.start, event.end).utc().format(dateFormat)
      ].filter(nonEmpty).join('/'),
      details: event.description,
      location: event.location && event.location.address
    }
  })
}

function padLeft (number) {
  if (number < 10) {
    return `0${number}`
  }
  return number
}

function getDuration (start, end) {
  const duration = moment.duration(moment(end).diff(start, 'minutes'), 'minutes')
  return `${padLeft(duration.hours())}${padLeft(duration.minutes())}`
}

function getYahooLink (event) {
  return qsm('http://calendar.yahoo.com/', {
    set: {
      v: 60,
      view: 'd',
      type: 20,
      title: event.name,
      st: moment(event.start).utc().format(dateFormat),
      dur: getDuration(event.start, getEnd(event.start, event.end)),
      desc: event.description,
      in_loc: event.location && event.location.address
    }
  })
}

function getUrl (event) {
  return ''
}

function getICalLink (event) {
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
    'END:VCALENDAR'
  ].join('%0A')
}

function openInNewWindow (event) {
  event.preventDefault()
  window.open(event.target.href)
}

function AddToCalendarComponent ({ className, event, t }) {
  return (
    <NavDropdown className={className} title={t('addToCalendar')}>
      <Nav.Link href={getGoogleLink(event)} onClick={openInNewWindow}>{t('googleCalendar')}</Nav.Link>
      <Nav.Link href={getYahooLink(event)} onClick={openInNewWindow}>{t('yahooCalendar')}</Nav.Link>
      <Nav.Link href={getICalLink(event)} onClick={openInNewWindow}>{t('iCalFile')}</Nav.Link>
    </NavDropdown>
  )
}

AddToCalendarComponent.propTypes = {
  className: ClassName,
  event: Show.isRequired
}

export const AddToCalendar = withTranslation(['common'])(AddToCalendarComponent)
