import PropTypes from 'prop-types'
import React from 'react'

import { gql } from 'apollo-boost'

import { Show } from '../proptypes'
import { withQuery } from '../graphql'

const QUERY_SHOW = gql`
  query GetShow($slug: String!) {
    show(slug: $slug) {
      id,
      location {
        name
      },
      name,
      start,
    }
  }
`

const ShowDetailInner = ({ data }) => (
  <div>
    {data.show.name}
  </div>
)

ShowDetailInner.propTypes = {
  data: PropTypes.shape({
    show: Show.isRequired
  })
}

export const ShowDetail = withQuery(ShowDetailInner, QUERY_SHOW)
