import React from 'react'

import { Section, Heading } from '@polocas-napadu/ui/content.mjs'
import { withTranslation } from '@polocas-napadu/ui/i18n.mjs'

function formatPlace(place) {
  return place.location.name
}

export const HomeStageNotice = withTranslation(({ usualPlaces, t }) => {
  if (!usualPlaces.length) {
    return null
  }

  return (
    <Section>
      <Heading>{t('home-stage')}</Heading>
      <p>
        {t('usualHomeStages', {
          places: usualPlaces.map(formatPlace).join(','),
        })}
      </p>
    </Section>
  )
})
