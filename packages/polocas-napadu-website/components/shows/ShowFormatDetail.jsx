import Col from 'react-bootstrap/Col'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'

import { ContentContainer, List, Title } from '../layout'
import { gql } from 'apollo-boost'
import { BriefShowListItem } from './BriefShowListItem'
import { ShowType } from '../proptypes'
import { withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const QUERY_SHOW = gql`
  query GetShowFormat($slug: String!) {
    showType(slug: $slug) {
      description,
      id,
      name,
      shortDescription,
      slug,
    }
    showList(showTypeSlug: $slug, limit: 5) {
      id,
      name,
      start,
      slug,
      end,
      location {
        id,
        name,
      }
    }
  }
`

function ShowFormatDetailInner ({ data, t }) {
  const { showList, showType } = data
  return (
    <ContentContainer>
      <Title text={showType.name} />
      <h1>{showType.name}</h1>
      <Row>
        <Col lg={8}>
          <Markdown source={showType.shortDescription} />
          <Markdown source={showType.description} />
        </Col>
        <Col lg={4}>
          <List>
            {showList.map(show => (
              <BriefShowListItem key={show.id} show={show} />
            ))}
          </List>
        </Col>
      </Row>
    </ContentContainer>
  )
}

ShowFormatDetailInner.propTypes = {
  data: PropTypes.shape({
    showType: ShowType.isRequired
  })
}

export const ShowFormatDetail = withTranslation(['common'])(withQuery({ query: QUERY_SHOW })(ShowFormatDetailInner))