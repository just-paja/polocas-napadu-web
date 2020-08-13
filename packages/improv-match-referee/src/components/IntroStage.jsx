import BoardLayout from './BoardLayout'
import ControlsLayout from './ControlsLayout'
import MainControls from './MainControls'
import React from 'react'
import Team from './Team'

import { Classes } from 'core/proptypes'
import { withStyles } from '@material-ui/core/styles'
import { TEAM_SIDE_LEFT, TEAM_SIDE_RIGHT } from 'core/constants'

const styles = {
  inspiration: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }
}

const IntroStage = ({ classes }) => (
  <ControlsLayout>
    <BoardLayout>
      <Team side={TEAM_SIDE_LEFT} />
      <Team side={TEAM_SIDE_RIGHT} />
    </BoardLayout>
    <MainControls center>
      <h1>Intro</h1>
      <p>
        Během intra sportovní komentátoři udělají prognózu zápasu a
        poté probíhá veřejná rozcvička.
      </p>
    </MainControls>
  </ControlsLayout>
)

IntroStage.propTypes = {
  classes: Classes.isRequired
}

export default withStyles(styles)(IntroStage)
