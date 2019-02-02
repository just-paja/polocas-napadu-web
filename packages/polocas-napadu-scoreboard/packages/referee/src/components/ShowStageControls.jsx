import React from 'react';

import { MatchContext } from 'core/context';
import { Children, Classes } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';
import {
  STAGE_FINALE,
  STAGE_GAME_RESULTS,
  STAGE_GAME_SETUP,
  STAGE_GAME,
  STAGE_INTRO,
  STAGE_PAUSE,
  STAGE_SHOW_SETUP,
} from 'core/constants';

import ShowProgress from './ShowProgress';
import StageButton from './StageButton';

const STAGE_MAP = {
  [STAGE_FINALE]: [STAGE_GAME_SETUP],
  [STAGE_GAME_RESULTS]: [STAGE_GAME_SETUP, STAGE_PAUSE, STAGE_FINALE],
  [STAGE_GAME_SETUP]: [STAGE_GAME, STAGE_PAUSE],
  [STAGE_GAME]: [STAGE_GAME_RESULTS],
  [STAGE_INTRO]: [STAGE_GAME_SETUP],
  [STAGE_PAUSE]: [STAGE_GAME_SETUP],
  [STAGE_SHOW_SETUP]: [STAGE_INTRO],
};

const styles = theme => ({
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 2,
  },
});

const mapStageToButton = stage => <StageButton key={stage} stage={stage} />

class ShowStageControls extends React.Component {
  getForwardButtons() {
    const stage = this.context.match.currentStage;
    const forward = stage
      ? STAGE_MAP[stage.type]
      : STAGE_MAP[STAGE_SHOW_SETUP];
    return forward ? forward.map(mapStageToButton) : [];
  }

  render() {
    const { classes } = this.props;
    const { currentStage, prevStage } = this.context.match;
    const forward = this.getForwardButtons();
    return (
      <div className={classes.box}>
        {currentStage ? (
          <ShowProgress side="left">
            <StageButton back stage={prevStage ? prevStage.type : STAGE_SHOW_SETUP} />
          </ShowProgress>
        ) : null}
        {forward.length
          ? <ShowProgress side="right">{forward}</ShowProgress>
          : null}
      </div>
    );
  }
}

ShowStageControls.contextType = MatchContext;

ShowStageControls.propTypes = {
  children: Children,
  classes: Classes.isRequired,
};

export default withStyles(styles)(ShowStageControls);
