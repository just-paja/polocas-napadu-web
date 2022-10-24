import moment from 'moment-timezone'
import React from 'react'

import { qsm } from 'query-string-manipulator'
import { Button } from 'polocas-napadu-ui/Button.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'
import { DateLabel, DateRangeLabel } from 'polocas-napadu-ui/datetime.mjs'
import { useUrl } from './hooks.mjs'
import { Location } from 'polocas-napadu-core/proptypes.mjs'

export const EventLocation = ({ location }) => <span>{location.name}</span>

EventLocation.propTypes = {
  location: Location.isRequired,
}

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

const MonthButton = ({ month, onClick, selected, ...props }) => {
  const url = qsm(useUrl(), {
    set: { month },
  })
  return (
    <Button
      {...props}
      type="button"
      href={url}
      variant={selected ? 'primary' : 'secondary'}
    >
      <DateLabel date={month} day={undefined} />
    </Button>
  )
}

const toMonth = date => date.format('YYYY-MM')

const MAX_MONTHS = 2

const MonthPicker = ({ value, ...props }) => {
  const now = moment(value)
  const followUpMonths = [
    toMonth(now.clone().add(-1, 'month')),
    toMonth(now),
    toMonth(now.clone().add(1, 'month')),
    toMonth(now.clone().add(MAX_MONTHS, 'month')),
  ]
  return (
    <div {...props} className="mt-2">
      {followUpMonths.map(m => (
        <MonthButton
          className="me-1"
          month={m}
          key={m}
          selected={value === m}
        />
      ))}
    </div>
  )
}

export const EventFilter = ({ values }) => {
  return (
    <div className="mt-3">
      <MonthPicker value={values.month} />
    </div>
  )
}
