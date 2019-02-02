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
  [STAGE_FINALE]: {
    back: [STAGE_GAME_SETUP],
    forward: [],
  },
  [STAGE_GAME_RESULTS]: {
    back: [STAGE_GAME],
    forward: [STAGE_GAME_SETUP, STAGE_PAUSE, STAGE_FINALE],
  },
  [STAGE_GAME_SETUP]: {
    back: [STAGE_INTRO, STAGE_GAME_RESULTS],
    forward: [STAGE_GAME, STAGE_PAUSE],
  },
  [STAGE_GAME]: {
    back: [STAGE_GAME_SETUP],
    forward: [STAGE_GAME_RESULTS],
  },
  [STAGE_INTRO]: {
    back: [STAGE_SHOW_SETUP],
    forward: [STAGE_GAME_SETUP],
  },
  [STAGE_PAUSE]: {
    back: [STAGE_GAME_RESULTS],
    forward: [STAGE_GAME_SETUP],
  },
  [STAGE_SHOW_SETUP]: {
    back: [],
    forward: [STAGE_INTRO],
  },
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
  getBackButtons() {
    const { back } = STAGE_MAP[this.context.match.currentStage.type];
    return back ? back.map(mapStageToButton) : [];
  }

  getForwardButtons() {
    const { forward } = STAGE_MAP[this.context.match.currentStage.type] || STAGE_MAP.STAGE_SHOW_SETUP;
    return forward ? forward.map(mapStageToButton) : [];
  }

  render() {
    const { classes } = this.props;
    const back = this.getBackButtons();
    const forward = this.getForwardButtons();
    return (
      <div class={classes.box}>
        {back.length
          ? <ShowProgress side="left">{back}</ShowProgress>
          : null}
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
