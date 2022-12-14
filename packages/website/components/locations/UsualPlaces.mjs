import Markdown from 'react-markdown'
import React from 'react'

import { Heading, Section } from '@polocas-napadu/ui/content.mjs'
import { Location } from './Location.mjs'
import { withTranslation } from '@polocas-napadu/ui/i18n.mjs'

const UsualPlace = ({ place }) => (
  <Section>
    <Heading>{place.name}</Heading>
    <Markdown source={place.description} />
    <Location location={place.location} />
  </Section>
)

export const UsualPlaces = withTranslation(({ places, t }) => (
  <Section>
    <p>{t('usualPlacesFlavourText')}</p>
    {places.map(place => (
      <UsualPlace key={place.id} place={place} />
    ))}
  </Section>
))
