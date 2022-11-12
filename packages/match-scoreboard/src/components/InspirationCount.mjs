import graphContainer from './GraphContainer.mjs'
import React from 'react'
import styles from './InspirationCount.module.scss'

import { gql } from '@apollo/client'

const GET_MATCH_INSPIRATION_COUNT = gql`
  query TotalCount($matchId: Int!) {
    match(id: $matchId) {
      preparedInspirationCount
    }
  }
`

export const InspirationCount = graphContainer(
  ({ data }) => (
    <p className={styles.inspiration}>
      Celkem témat: {data.match.preparedInspirationCount}
    </p>
  ),
  GET_MATCH_INSPIRATION_COUNT,
  true
)
