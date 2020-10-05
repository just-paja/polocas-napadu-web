import GraphContainer from './GraphContainer'
import React from 'react'

import { gql } from 'apollo-boost'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  inspiration: {
    color: 'white',
    fontSize: '3rem',
    textAlign: 'center'
  }
}

const GET_MATCH_INSPIRATION_COUNT = gql`
  query TotalCount($matchId: Int!){
    match(id: $matchId) {
      preparedInspirationCount,
    }
  }
`

const InspirationCount = ({ classes, data }) => (
  <p className={classes.inspiration}>
    Celkem témat: {data.match.preparedInspirationCount}
  </p>
)

InspirationCount.propTypes = {
}

export default GraphContainer(
  withStyles(styles)(InspirationCount),
  GET_MATCH_INSPIRATION_COUNT,
  true
)
