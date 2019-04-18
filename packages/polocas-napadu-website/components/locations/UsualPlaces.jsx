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
  <Grid container>
    {data.usualPlaceList.map(place => (
      <Grid item key={place.id} xs={12} sm={6} md={4}>
        <UsualPlace place={place} />
      </Grid>
    ))}
  </Grid>
)

export const UsualPlaces = withQuery(
  UsualPlacesComponent,
  QUERY_USUAL_PLACES
)
