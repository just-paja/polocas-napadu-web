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
import ShowStageControl from './ShowStageControl';
import ShowStageMenu from './ShowStageMenu';

const STAGE_MAP = {
  [STAGE_FINALE]: [STAGE_GAME_SETUP],
  [STAGE_GAME_RESULTS]: [STAGE_GAME_SETUP],
  [STAGE_GAME_SETUP]: [STAGE_GAME],
  [STAGE_GAME]: [STAGE_GAME_RESULTS],
  [STAGE_INTRO]: [STAGE_GAME_SETUP],
  [STAGE_PAUSE]: [STAGE_GAME_SETUP],
  [STAGE_SHOW_SETUP]: [STAGE_INTRO],
};

const styles = theme => ({
  box: {
    background: theme.palette.grey['A100'],
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 2,
    marginTop: 'auto',
  },
});

const mapStageToButton = stage => <ShowStageControl key={stage} stage={stage} />

class ShowStageControls extends React.Component {
  getForwardButtons() {
    const stage = this.context.match.currentStage;
    const forward = stage
      ? STAGE_MAP[stage.type]
      : STAGE_MAP[STAGE_SHOW_SETUP];
    return forward || [];
  }

  render() {
    const { classes } = this.props;
    const { currentStage, prevStage } = this.context.match;
    const forward = this.getForwardButtons();
    return (
      <div className={classes.box}>
        {currentStage ? (
          <ShowProgress side="left">
            <ShowStageControl back stage={prevStage ? prevStage.type : STAGE_SHOW_SETUP} />
          </ShowProgress>
        ) : null}
        <ShowProgress side="right">
          {forward.map(mapStageToButton)}
          <ShowStageControl
            component={ShowStageMenu}
            omit={[
              currentStage && currentStage.type,
              ...forward,
            ]}
          />
        </ShowProgress>
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
