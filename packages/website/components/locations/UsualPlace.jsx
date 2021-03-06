import Markdown from 'react-markdown'
import React from 'react'

import { Location } from './Location'
import { UsualPlace as UsualPlaceProp } from 'polocas-napadu-core/proptypes'

const UsualPlaceComponent = ({ place }) => (
  <div>
    <h2>{place.name}</h2>
    <Markdown source={place.description} />
    <Location location={place.location} />
  </div>
)

UsualPlaceComponent.propTypes = {
  place: UsualPlaceProp.isRequired
}

export const UsualPlace = UsualPlaceComponent
