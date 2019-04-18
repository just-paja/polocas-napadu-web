import PropTypes from 'prop-types'
import React from 'react'

import { gql } from 'apollo-boost'
import { ShowListItem } from './ShowListItem'
import { Show } from '../proptypes'
import { withQuery } from '../graphql'

const QUERY_SHOW_LIST = gql`
  query GetShowList {
    showList {
      id,
      location {
        address,
        name,
      },
      name,
      start,
      slug,
    }
  }
`

const ShowListInner = ({ data }) => (
  data.showList.map(show => (
    <ShowListItem key={show.id} show={show} />
  ))
)

ShowListInner.propTypes = {
  data: PropTypes.shape({
    showList: PropTypes.arrayOf(Show)
  })
}

export const ShowList = withQuery(ShowListInner, QUERY_SHOW_LIST)
