import PropTypes from 'prop-types'
import React from 'react'
import styles from './ShowDetail.module.scss'

import { AddToCalendar, EventStart } from '../events'
import { ExternalLink } from '../text'
import { FaCalendarDay, FaFacebookSquare } from 'react-icons/fa'
import { LogisticInfo } from './LogisticInfo'
import { Show } from '../proptypes'
import { withTranslation } from '../../lib/i18n'

function ShowDateInfoComponent ({ show, t }) {
  return (
    <LogisticInfo
      icon={FaCalendarDay}
      summary={<EventStart end={show.end} start={show.start} />}
    >
      <ExternalLink href={show.linkFacebook} icon={FaFacebookSquare}>
        {t('eventOnFacebook')}
      </ExternalLink>
      <AddToCalendar className={styles.addToCalendar} event={show} />
    </LogisticInfo>
  )
}

ShowDateInfoComponent.propTypes = {
  show: Show.isRequired,
  t: PropTypes.func.isRequired
}

export const ShowDateInfo = withTranslation(['common'])(ShowDateInfoComponent)
