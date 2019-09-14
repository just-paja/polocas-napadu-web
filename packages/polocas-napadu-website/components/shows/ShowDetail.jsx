import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import React from 'react'

import { gql } from 'apollo-boost'

import { EventLocation, EventStart } from '../events'
import { Show } from '../proptypes'
import { withQuery } from '../graphql'

const QUERY_SHOW = gql`
  query GetShow($slug: String!) {
    show(slug: $slug) {
      description,
      id,
      location {
        name,
      },
      showType {
        id,
        name,
      },
      name,
      start,
    }
  }
`

const ShowDetailInner = ({ data }) => (
  <div>
    <h1>{data.show.name}</h1>
    <p>
      {data.show.showType.name}<br />
      <EventStart end={data.show.end} start={data.show.start} /><br />
      <EventLocation location={data.show.location} />
    </p>
    <Markdown source={data.show.description} />
  </div>
)

ShowDetailInner.propTypes = {
  data: PropTypes.shape({
    show: Show.isRequired
  })
}

export const ShowDetail = withQuery({ query: QUERY_SHOW })(ShowDetailInner)
