import PropTypes from 'prop-types'
import React from 'react'

import { gql } from 'apollo-boost'
import { List } from '../layout'
import { ShowFormatGalleryItem } from './ShowFormatGalleryItem'
import { ShowType } from 'polocas-napadu-core/proptypes'
import { withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const QUERY_SHOW_FORMAT_LIST = gql`
  query GetShowFormatList {
    showTypeList {
      id,
      name,
      shortDescription,
      slug,
    }
  }
`

const ShowFormatGalleryComponent = ({ data, t }) => {
  if (!data.showTypeList.length) {
    return null
  }
  return (
    <List>
      {data.showTypeList.map(showFormat => (
        <ShowFormatGalleryItem key={showFormat.id} showFormat={showFormat} />
      ))}
    </List>
  )
}

ShowFormatGalleryComponent.propTypes = {
  data: PropTypes.shape({
    showTypeList: PropTypes.arrayOf(ShowType).isRequired
  })
}

export const ShowFormatGallery = withTranslation(['common'])(
  withQuery({ query: QUERY_SHOW_FORMAT_LIST })(ShowFormatGalleryComponent)
)
