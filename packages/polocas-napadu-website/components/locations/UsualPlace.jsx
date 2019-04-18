import Markdown from 'react-markdown'
import React from 'react'
import Typography from '@material-ui/core/Typography'

import { Location } from './Location'
import { UsualPlaceProp } from '../proptypes'

const UsualPlaceComponent = ({ place }) => (
  <div>
    <Typography variant='h3'>{place.name}</Typography>
    <Markdown source={place.description} />
    <Location location={place.location} />
  </div>
)

UsualPlaceComponent.propTypes = {
  place: UsualPlaceProp.isRequired
}

export const UsualPlace = UsualPlaceComponent
