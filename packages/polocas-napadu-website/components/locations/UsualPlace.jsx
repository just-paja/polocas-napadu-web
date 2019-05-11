import Markdown from 'react-markdown'
import React from 'react'

import { Location } from './Location'
import { UsualPlaceProp } from '../proptypes'

const UsualPlaceComponent = ({ place }) => (
  <div>
    <h3>{place.name}</h3>
    <Markdown source={place.description} />
    <Location location={place.location} />
  </div>
)

UsualPlaceComponent.propTypes = {
  place: UsualPlaceProp.isRequired
}

export const UsualPlace = UsualPlaceComponent
