import PropTypes from 'prop-types'
import React from 'react'

import { FoulType } from 'polocas-napadu-core/proptypes'
import { gql } from 'apollo-boost'
import { withQuery } from '../graphql.mjs'
import { Link } from '../links.mjs'

const QUERY_FOUL_LIST = gql`
  query getFoulTypeList {
    foulTypeList {
      name
      slug
    }
  }
`

const FoulTypeListComponent = ({ data }) => {
  return (
    <ul>
      {data.foulTypeList.map(foulType => (
        <li key={foulType.slug}>
          <Link route="foulTypeDetail" params={{ slug: foulType.slug }}>
            {foulType.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

FoulTypeListComponent.propTypes = {
  data: PropTypes.shape({
    foulTypeList: PropTypes.arrayOf(FoulType).isRequired,
  }),
}

export const FoulTypeList = withQuery({ query: QUERY_FOUL_LIST })(
  FoulTypeListComponent
)
