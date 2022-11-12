import graphContainer from './GraphContainer.mjs'
import React from 'react'

import { gql } from '@apollo/client'

const GET_MATCH_INSPIRATION_QR = gql`
  query ($matchId: Int!) {
    match(id: $matchId) {
      show {
        inspirationQrUrl
      }
    }
  }
`

export const InspirationQr = graphContainer(
  ({ data, ...props }) => (
    <img src={data.match.show.inspirationQrUrl} alt="invite" {...props} />
  ),
  GET_MATCH_INSPIRATION_QR
)
