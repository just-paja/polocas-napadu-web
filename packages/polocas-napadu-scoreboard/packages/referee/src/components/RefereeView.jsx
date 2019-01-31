import React from 'react';

import { RouterContext } from 'core/context';
import { withStyles } from '@material-ui/core/styles';

import MatchStage from './MatchStage';

import { Classes } from 'core/proptypes';

const styles = {
};

const RefereeView = ({ classes, match }) => (
  <div>
    <RouterContext.Provider value={match.params}>
      <MatchStage />
    </RouterContext.Provider>
  </div>
);

RefereeView.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(RefereeView);
