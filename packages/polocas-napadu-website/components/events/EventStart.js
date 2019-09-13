import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'

import { withTranslation } from '../../lib/i18n'

const renderSingleDate = (date, format) => <span>{date.format(format)}</span>

const EventStartInner = ({ allDay, end, start, t }) => {
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
