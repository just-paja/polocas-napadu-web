import AlreadyStarted from './AlreadyStarted'
import GraphContainer from './GraphContainer'
import InsertInspiration from './InsertInspiration'
import React from 'react'

import { Classes } from 'core/proptypes'
import { MatchContext } from 'core/context'
import { gql } from 'apollo-boost'
import { withStyles } from '@material-ui/core/styles'
import { STAGE_INTRO } from 'core/constants'

const styles = theme => ({
  flex: {
    display: 'flex',
    height: '100%',
    width: '100%'
  },
  layout: {
    margin: 'auto',
    maxWidth: theme.spacing.unit * 60,
    padding: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 3
  }
})

const GET_MATCH = gql`
  query MatchStage($matchId: Int!) {
    match(id: $matchId) {
      show {
        id,
        name,
        start,
        totalInspirations,
      },
      currentStage {
        created,
        type,
      },
    }
  }
`

const getStageView = (stage) => {
  if (stage && stage.type !== STAGE_INTRO) {
    return <AlreadyStarted />
  }
  return <InsertInspiration />
}

const ShowInspirations = ({ classes, data }) => (
  <MatchContext.Provider value={data}>
    <div className={classes.flex}>
      <div className={classes.layout}>
        <h1>{data.match.show.name}</h1>
        {getStageView(data.match.currentStage)}
        <p>Celkem jste nás inspirovali {data.match.show.totalInspirations}x</p>
      </div>
    </div>
  </MatchContext.Provider>
)

ShowInspirations.propTypes = {
  classes: Classes.isRequired
}

export default GraphContainer(
  withStyles(styles)(ShowInspirations),
  GET_MATCH,
  true
)
