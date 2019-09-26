import Col from 'react-bootstrap/Col'
import React from 'react'
import Row from 'react-bootstrap/Row'

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
  <Row className='justify-content-center'>
    {data.usualPlaceList.map(place => (
      <Col
        key={place.id}
        md={5}
        sm={6}
        xs={12}
      >
        <UsualPlace place={place} />
      </Col>
    ))}
  </Row>
)

export const UsualPlaces = withQuery({ query: QUERY_USUAL_PLACES })(UsualPlacesComponent)
