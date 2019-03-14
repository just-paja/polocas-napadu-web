import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'

import { withNamespaces } from '../../lib/i18n'

const renderSingleDate = (date, format) => <span>{date.format(format)}</span>

export const EventStartInner = ({ allDay, end, start, t }) => {
  if (!start) {
    return t('event-start-indeterminate')
  }
  const startDate = moment(start)
  if (!end) {
    return renderSingleDate(startDate, allDay ? 'LL' : 'LLL')
  }
  const endDate = moment(end)
  if (startDate.isSame(end, 'day')) {
    if (allDay) {
      return renderSingleDate(startDate, 'LL')
    }
    return (<span>{startDate.format('LLL')} - {endDate.format('LT')}</span>)
  }
  const format = allDay ? 'LL' : 'LLL'
  return (<span>{startDate.format(format)} - {endDate.format(format)}</span>)
}

export const EventStart = withNamespaces(['events'])(EventStartInner)

EventStart.displayName = 'EventStart'

EventStart.propTypes = {
  allDay: PropTypes.bool,
  end: PropTypes.string,
  start: PropTypes.string,
}

EventStart.defaultProps = {
  allDay: false,
}
