import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { withStage } from '../context';

import GameInspiration from './GameInspiration';
import GameVoteChart from './GameVoteChart';

const styles = {
};

class GameVote extends React.Component {
  getPoll() {
    return this.props.stage.scorePointPoll;
  }

  render() {
    const poll = this.getPoll();
    if (!poll) {
      return <GameInspiration />;
    }
    return (
      <GameVoteChart
        poll={poll}
      />
    )
  };
}

GameVote.propTypes = {
  poll: PropTypes.object,
};

export default withStage(withStyles(styles)(GameVote));
