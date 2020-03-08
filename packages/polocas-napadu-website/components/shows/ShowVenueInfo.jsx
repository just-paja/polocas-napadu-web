import PropTypes from 'prop-types'
import React from 'react'

import { Address } from '../locations'
import { EventLocation } from '../events'
import { ExternalLink } from '../text'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { LogisticInfo } from './LogisticInfo'
import { Show } from '../proptypes'
import { withTranslation } from '../../lib/i18n'

function ShowVenueInfoComponent ({ show, t }) {
  return (
    <LogisticInfo
      icon={FaMapMarkerAlt}
      summary={<EventLocation location={show.location} />}
    >
      <Address address={show.location.address} city={show.location.city} />
      <ExternalLink
        href={`https://www.google.com/maps/dir/?api=1&destination=${show.location.address}`}
      >
        {t('howDoIGetThere')}
      </ExternalLink>
    </LogisticInfo>
  )
}

ShowVenueInfoComponent.propTypes = {
  show: Show.isRequired,
  t: PropTypes.func.isRequired
}

export const ShowVenueInfo = withTranslation(['common'])(ShowVenueInfoComponent)
