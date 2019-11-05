import moment from 'moment-timezone'
import PropTypes from 'prop-types'
import React from 'react'

import { withTranslation } from '../../lib/i18n'

function renderSingleDate (date, format, className) {
  return <time dateTime={date.format()} className={className}>{date.format(format)}</time>
}

const EventStartInner = ({ allDay, className, end, start, t }) => {
  if (!start) {
    return t('event-start-indeterminate')
  }
  const startDate = moment(start)
  if (!end) {
    return renderSingleDate(startDate, allDay ? 'LL' : 'LLL', className)
  }
  const endDate = moment(end)
  if (startDate.isSame(end, 'day')) {
    if (allDay) {
      return renderSingleDate(startDate, 'LL', className)
    }
    return (<span className={className}>{startDate.format('LLL')} - {endDate.format('LT')}</span>)
  }
  const format = allDay ? 'LL' : 'LLL'
  return (<span className={className}>{startDate.format(format)} - {endDate.format(format)}</span>)
}

export const EventStart = withTranslation(['common'])(EventStartInner)

EventStart.displayName = 'EventStart'

EventStartInner.propTypes = {
  allDay: PropTypes.bool,
  end: PropTypes.string,
  start: PropTypes.string
}

EventStartInner.defaultProps = {
  allDay: false
}
