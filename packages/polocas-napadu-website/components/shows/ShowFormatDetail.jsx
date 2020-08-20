import Col from 'react-bootstrap/Col'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'

import { BriefShowListItem } from './BriefShowListItem'
import { ContentContainer, List, Title } from '../layout'
import { gql } from 'apollo-boost'
import { Link } from '../bindings'
import { ShowType } from 'polocas-napadu-core/proptypes'
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
      useFouls,
      useGames,
    }
    showList(showTypeSlug: $slug, limit: 5, orderBy: "-start") {
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
          <Markdown className='lead' source={showType.shortDescription} />
          <Markdown source={showType.description} />
          {(showType.useGames || showType.useFouls) ? (
            <>
              <h2>{t('articleLinks')}</h2>
              <ul>
                {showType.useGames && (
                  <li>
                    <Link route='gameList'>
                      <a>{t('gameList')}</a>
                    </Link>
                  </li>)}
                {showType.useFouls && (
                  <li>
                    <Link route='foulTypeList'>
                      <a>{t('foulTypes')}</a>
                    </Link>
                  </li>)}
              </ul>
            </>
          ) : null}
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
