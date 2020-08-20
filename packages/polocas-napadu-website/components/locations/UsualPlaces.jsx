import Col from 'react-bootstrap/Col'
import React from 'react'
import Row from 'react-bootstrap/Row'

import { gql } from 'apollo-boost'
import { UsualPlace } from './UsualPlace'
import { withQuery } from '../graphql'

const QUERY_USUAL_PLACES = gql`
  query GetUsualPlaceList {
    usualPlaceList {
      description
      id
      location {
        name
        address
      }
      name
    }
  }
`

const UsualPlacesComponent = ({ data }) => (
  <>
    {data.usualPlaceList.map(place => (
      <UsualPlace key={place.id} place={place} />
    ))}
  </>
)

export const UsualPlaces = withQuery({ query: QUERY_USUAL_PLACES })(
  UsualPlacesComponent
)
