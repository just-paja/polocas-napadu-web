import Grid from '@material-ui/core/Grid'
import React from 'react'

import { gql } from 'apollo-boost'
import { UsualPlace } from './UsualPlace'
import { withQuery } from '../graphql'

const QUERY_USUAL_PLACES = gql`
  query GetUsualPlaceList {
    usualPlaceList {
      description,
      id,
      location {
        name,
        address,
      },
      name,
    }
  }
`

const UsualPlacesComponent = ({ data }) => (
  <Grid container justify='center' spacing={32}>
    {data.usualPlaceList.map(place => (
      <Grid
        item
        key={place.id}
        md='auto'
        sm={4}
        xs={12}
      >
        <UsualPlace place={place} />
      </Grid>
    ))}
  </Grid>
)

export const UsualPlaces = withQuery(
  UsualPlacesComponent,
  QUERY_USUAL_PLACES
)
