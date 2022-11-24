import Markdown from 'react-markdown'
import React from 'react'

import { Location } from './Location.mjs'

export const UsualPlace = ({ place }) => (
  <div>
    <h2>{place.name}</h2>
    <Markdown source={place.description} />
    <Location location={place.location} />
  </div>
)
