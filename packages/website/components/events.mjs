import moment from 'moment-timezone'
import React from 'react'

import { Button } from 'polocas-napadu-ui/Button.mjs'
import { DateLabel } from 'polocas-napadu-ui/datetime.mjs'
import { qsm } from 'query-string-manipulator'
import { useUrl } from './hooks.mjs'

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
