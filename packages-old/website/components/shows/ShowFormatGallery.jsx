import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import PropTypes from 'prop-types'
import React from 'react'

import { gql } from 'apollo-boost'
import { ContentContainer, List } from '../layout'
import { ShowFormatGalleryItem } from './ShowFormatGalleryItem'
import { ShowType } from 'polocas-napadu-core/proptypes'
import { photoQuery, withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const QUERY_SHOW_FORMAT_LIST = gql`
  query GetShowFormatList {
    showTypeList {
      id,
      name,
      shortDescription,
      slug,
      photos ${photoQuery}
    }
  }
`

const ShowFormatGalleryComponent = ({ data, t }) => {
  if (!data.showTypeList.length) {
    return null
  }
  return (
    <List>
      <ContentContainer>
        <Row>
          {data.showTypeList.map(showFormat => (
            <Col key={showFormat.id} lg={6} xl={4}>
              <ShowFormatGalleryItem showFormat={showFormat} />
            </Col>
          ))}
        </Row>
      </ContentContainer>
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
