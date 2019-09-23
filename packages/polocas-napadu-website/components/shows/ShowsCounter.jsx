import Col from 'react-bootstrap/Col'
import Markdown from 'react-markdown'
import React from 'react'
import Row from 'react-bootstrap/Row'
import styles from './ShowsCounter.scss'

import { gql } from 'apollo-boost'
import { ShowsCounterItem } from './ShowsCounterItem'
import { withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const QUERY_SHOWS_COUNT = gql`
  query GetShowCounts {
    showTypeList {
      id,
      name,
      showCount,
      slug,
    }
  }
`

function ShowsCounterComponent ({ data, t }) {
  const formats = data.showTypeList
  return (
    <div className={styles.counter}>
      <h2>{t('howMuchDidWePlay')}</h2>
      <Markdown source={t('howMuchDidWePlayPerex')} />
      <Row className='mt-3'>
        {formats.map(format => (
          <Col
            key={format.id}
            md={4}
            xs={6}
          >
            <ShowsCounterItem
              key={format.id}
              format={format}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export const ShowsCounter = withQuery({ query: QUERY_SHOWS_COUNT })(
  withTranslation(['common'])(ShowsCounterComponent)
)
