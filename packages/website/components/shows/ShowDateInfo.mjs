import React from 'react'
import styles from './ShowDateInfo.module.scss'

import { AddToCalendar } from '../ics.mjs'
import { EventStart } from 'polocas-napadu-ui/events.mjs'
import { ExternalLink } from '../links.mjs'
import { Heading } from 'polocas-napadu-ui/content.mjs'
import { LogisticInfo } from './LogisticInfo.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'
import { LogisticsIcon, FacebookIcon } from 'polocas-napadu-ui/icons.mjs'

export const ShowDateInfo = withTranslation(({ show, t }) => {
  return (
    <LogisticInfo
      icon={LogisticsIcon}
      summary={
        <Heading>
          <EventStart end={show.end} start={show.start} />
        </Heading>
      }
    >
      <div>
        <ExternalLink href={show.linkFacebook} icon={FacebookIcon}>
          {t('eventOnFacebook')}
        </ExternalLink>
      </div>
      <div>
        <AddToCalendar className={styles.addToCalendar} event={show} />
      </div>
    </LogisticInfo>
  )
})
