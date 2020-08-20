import PropTypes from 'prop-types'
import React from 'react'

import { gql } from 'apollo-boost'
import { List } from '../layout'
import { ShowFormatListItem } from './ShowFormatListItem'
import { ShowType } from 'polocas-napadu-core/proptypes'
import { withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const QUERY_SHOW_FORMAT_LIST = gql`
  query GetShowFormatList {
    showTypeList {
      id,
      name,
      slug,
    }
  }
`

const ShowFormatListComponent = ({ data, t }) => {
  if (!data.showTypeList.length) {
    return null
  }
  return (
    <List as='ul'>
      {data.showTypeList.map(showFormat => (
        <ShowFormatListItem key={showFormat.id} showFormat={showFormat} />
      ))}
    </List>
  )
}

ShowFormatListComponent.propTypes = {
  data: PropTypes.shape({
    showTypeList: PropTypes.arrayOf(ShowType).isRequired
  })
}

export const ShowFormatList = withTranslation(['common'])(
  withQuery({ query: QUERY_SHOW_FORMAT_LIST })(ShowFormatListComponent)
)
