import React from 'react'

import { Address } from '../locations'
import { EventLocation } from '../events'
import { ExternalLink } from '../links.mjs'
import { LocationIcon } from 'polocas-napadu-ui/icons.mjs'
import { LogisticInfo } from './LogisticInfo'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'

export const ShowVenueInfo = withTranslation(({ show, t }) => (
  <LogisticInfo
    icon={LocationIcon}
    summary={<EventLocation location={show.location} />}
  >
    <Address address={show.location.address} city={show.location.city} />
    <ExternalLink
      href={`https://www.google.com/maps/dir/?api=1&destination=${show.location.address}`}
    >
      {t('howDoIGetThere')}
    </ExternalLink>
  </LogisticInfo>
))
