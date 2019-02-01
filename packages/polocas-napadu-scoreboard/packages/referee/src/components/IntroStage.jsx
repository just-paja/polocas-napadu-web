import React from 'react';

import { Classes } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';
import {
  STAGE_GAME_SETUP,
  STAGE_SHOW_SETUP,
  TEAM_SIDE_LEFT,
  TEAM_SIDE_RIGHT,
} from 'core/constants';

import BoardLayout from './BoardLayout';
import StageButton from './StageButton';
import Team from './Team';

const styles = {
  inspiration: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
};

const ShowSetupStage = ({ classes }) => (
  <BoardLayout layout="vertical">
    <BoardLayout>
      <Team side={TEAM_SIDE_LEFT} />
      <Team side={TEAM_SIDE_RIGHT} />
    </BoardLayout>
    <div>
      <StageButton stage={STAGE_SHOW_SETUP} />
      <StageButton stage={STAGE_GAME_SETUP} />
    </div>
  </BoardLayout>
);

ShowSetupStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(ShowSetupStage);
