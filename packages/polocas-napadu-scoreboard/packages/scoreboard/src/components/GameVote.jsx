import PropTypes from 'prop-types';
import React from 'react';

import { withStage } from '../context';

import GameInspiration from './GameInspiration';
import GameVoteChart from './GameVoteChart';

class GameVote extends React.Component {
  getPoll() {
    return this.props.stage && this.props.stage.scorePointPoll;
  }

  render() {
    const poll = this.getPoll();
    return poll
      ? <GameVoteChart poll={poll} />
      : <GameInspiration />;
  }
}

GameVote.propTypes = {
  poll: PropTypes.object,
};

export default withStage(GameVote);
