import BoardLayout from './BoardLayout'
import ControlsLayout from './ControlsLayout'
import InspirationList from './InspirationList'
import MainControls from './MainControls'
import moment from 'moment'
import React from 'react'
import Team from './Team'
import Timer from './Timer'

import { Classes } from 'polocas-napadu-core/proptypes'
import { MatchContext } from 'polocas-napadu-core/context'
import { TEAM_SIDE_LEFT, TEAM_SIDE_RIGHT } from 'polocas-napadu-core/constants'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  inspiration: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
}

const GameStage = ({ classes }) => (
  <MatchContext.Consumer>
    {data => (
      <ControlsLayout>
        <BoardLayout>
          <Team side={TEAM_SIDE_LEFT} />
          <Team side={TEAM_SIDE_RIGHT} />
        </BoardLayout>
        <MainControls center>
          <p>Právě probíhá kategorie</p>
          <h1>{data.match.currentStage.game.rules.name}</h1>
          <Timer
            start={moment().diff(data.match.currentStage.created, 'seconds')}
          />
          <InspirationList
            inspirations={data.match.currentStage.game.inspirations}
            readOnly
          />
        </MainControls>
      </ControlsLayout>
    )}
  </MatchContext.Consumer>
)

GameStage.propTypes = {
  classes: Classes.isRequired
}

export default withStyles(styles)(GameStage)
