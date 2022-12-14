import React from 'react'
import styles from './InspirationCount.module.scss'

import { gql } from '@apollo/client'
import { withQuery } from '@polocas-napadu/ui/apollo.mjs'

const GET_MATCH_INSPIRATION_COUNT = gql`
  query TotalCount($matchId: Int!) {
    match(id: $matchId) {
      preparedInspirationCount
    }
  }
`

export const InspirationCount = withQuery(
  ({ data }) => (
    <p className={styles.inspiration}>
      Celkem témat: {data.match.preparedInspirationCount}
    </p>
  ),
  GET_MATCH_INSPIRATION_COUNT,
  true
)
