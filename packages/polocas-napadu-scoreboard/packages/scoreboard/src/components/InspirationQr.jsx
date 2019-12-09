import GraphContainer from './GraphContainer'
import PropTypes from 'prop-types'
import React from 'react'

import { gql } from 'apollo-boost'

const GET_MATCH_INSPIRATION_QR = gql`
  query($matchId: Int!) {
    match(id: $matchId) {
      show {
        inspirationQrUrl
      }
    }
  }
`

const InspirationQr = ({ data, ...props }) => (
  <img
    src={data.match.show.inspirationQrUrl}
    alt='invite'
    {...props}
  />
)

InspirationQr.propTypes = {
  data: PropTypes.shape({
    match: PropTypes.shape({
      show: PropTypes.shape({
        inspirationQrUrl: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

export default GraphContainer(InspirationQr, GET_MATCH_INSPIRATION_QR)
