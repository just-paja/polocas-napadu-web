import BoardLayout from './BoardLayout'
import ControlsLayout from './ControlsLayout'
import MainControls from './MainControls'
import React from 'react'
import ScoreControls from './ScoreControls'
import Team from './Team'

import { Classes } from 'polocas-napadu-core/proptypes'
import { withStyles } from '@material-ui/core/styles'
import { TEAM_SIDE_LEFT, TEAM_SIDE_RIGHT } from 'polocas-napadu-core/constants'

const styles = {
  inspiration: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
}

const GameResultsStage = ({ classes }) => (
  <ControlsLayout>
    <BoardLayout>
      <Team side={TEAM_SIDE_LEFT}>
        <ScoreControls side={TEAM_SIDE_LEFT} />
      </Team>
      <Team side={TEAM_SIDE_RIGHT}>
        <ScoreControls side={TEAM_SIDE_RIGHT} />
      </Team>
    </BoardLayout>
    <MainControls center>
      <h1>Hlasování</h1>
      <p>V této fázi hry diváci hlasují o tom který tým dostane bod.</p>
    </MainControls>
  </ControlsLayout>
)

GameResultsStage.propTypes = {
  classes: Classes.isRequired
}

export default withStyles(styles)(GameResultsStage)
