import React from 'react'

import { Address } from '../locations/Address.mjs'
import { EventLocation } from 'polocas-napadu-ui/events.mjs'
import { ExternalLink } from '../links.mjs'
import { Heading } from 'polocas-napadu-ui/content.mjs'
import { LocationIcon } from 'polocas-napadu-ui/icons.mjs'
import { LogisticInfo } from './LogisticInfo.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'

export const ShowVenueInfo = withTranslation(({ show, t }) => (
  <LogisticInfo
    icon={LocationIcon}
    summary={
      <Heading>
        <EventLocation location={show.location} />
      </Heading>
    }
  >
    <Address address={show.location.address} city={show.location.city} />
    <ExternalLink
      href={`https://www.google.com/maps/dir/?api=1&destination=${show.location.address}`}
    >
      {t('howDoIGetThere')}
    </ExternalLink>
  </LogisticInfo>
))
