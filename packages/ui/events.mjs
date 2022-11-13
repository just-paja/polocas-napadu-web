import moment from 'moment-timezone'
import React from 'react'

import { DateLabel, DateRangeLabel } from './datetime.mjs'
import { withTranslation } from './i18n.mjs'

export const EventLocation = ({ location }) => <span>{location.name}</span>

/**
 * Detects if event start is before now and event end is before now. Given
 * event end is null, it compares it to end of day.
 */
export const isPast = event => {
  const start = moment(event.start)
  const now = moment()
  const end = event.end ? moment(event.end) : moment(event.start).endOf('day')
  return now.isAfter(start) && now.isAfter(end)
}

export const isLive = event => {
  const start = moment(event.start)
  const now = moment()
  const end = event.end ? moment(event.end) : moment(event.start).endOf('day')
  return now.isAfter(start) && now.isBefore(end)
}

export const EventStart = withTranslation(
  ({ allDay, className, end, start, t }) => {
    if (!start) {
      return t('event-start-indeterminate')
    }
    const startDate = moment(start)
    if (!end) {
      return <DateLabel showTime={!allDay} date={start} className={className} />
    }
    if (startDate.isSame(end, 'day')) {
      if (allDay) {
        return <DateLabel date={start} className={className} />
      }
    }
    return (
      <DateRangeLabel
        showTime={!allDay}
        start={start}
        end={end}
        className={className}
      />
    )
  }
)
