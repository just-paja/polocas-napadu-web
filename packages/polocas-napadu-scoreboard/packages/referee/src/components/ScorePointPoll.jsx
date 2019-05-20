import DecibelMeter from './DecibelMeter';
import GraphContainer from './GraphContainer';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';

import { MatchContext } from 'core/context';
import { Mutation } from 'react-apollo';
import { withStage } from '../context';

import * as queries from '../queries';

const withMutation = (propName, mutation) => Component => props => (
  <Mutation mutation={mutation}>
    {mutation => <Component {...{ [propName]: mutation }} {...props} />}
  </Mutation>
);

class ScorePointPoll extends React.Component {
  constructor() {
    super();
    this.handleRecordingStart = this.handleRecordingStart.bind(this);
    this.handleRecordingStop = this.handleRecordingStop.bind(this);
    this.handleScrape = this.handleScrape.bind(this);
  }

  getVoting(contestantGroupId) {
    const { scorePointPoll } = this.props.data;
    if (scorePointPoll) {
      return scorePointPoll.votings.find(
        voting => voting.contestantGroup && voting.contestantGroup.id === contestantGroupId
      );
    }
    return null;
  }

  handleRecordingStart(contestantGroupId) {
    const { onVotingStart } = this.props;
    onVotingStart({
      refetchQueries: ['ScorePointPoll'],
      variables: {
        contestantGroupId,
      }
    })
  }

  handleRecordingStop(contestantGroupId) {
    const { onVotingEnd } = this.props;
    const { id } = this.getVoting(contestantGroupId);
    onVotingEnd({
      refetchQueries: ['ScorePointPoll'],
      variables: {
        livePollVotingId: id,
      },
      optimisticResponse: {
        __typename: "Mutation",
        livePollVoting: {
          __typename: "LivePollVoting",
          id,
          closed: true,
        }
      }
    });
  }

  handleScrape(contestantGroupId, volume) {
    const { onVolumeScrape } = this.props;
    const { id } = this.getVoting(contestantGroupId);
    onVolumeScrape({
      variables: {
        livePollVotingId: id,
        volume
      }
    })
  }

  isVoting(groupId) {
    const { scorePointPoll } = this.props.data;
    if (scorePointPoll) {
      return scorePointPoll.votings.some(
        voting =>
          voting.contestantGroup
          && voting.contestantGroup.id === groupId
          && !voting.closed
      );
    }
  }

  disableNewVoting() {
    if (this.props.data.scorePointPoll) {
      return this.props.data.scorePointPoll.votings.some(voting => !voting.closed);
    }
    return false;
  }

  render() {
    const { contestantGroups } = this.context.match;
    return (
      <Grid container spacing={32}>
        {contestantGroups.map(group => (
          <Grid
            item
            key={group.id}
            md={6}
            xs={12}
          >
            <DecibelMeter
              disabled={this.disableNewVoting()}
              group={group}
              onRecordingStart={this.handleRecordingStart}
              onRecordingStop={this.handleRecordingStop}
              onScrape={this.handleScrape}
              recording={this.isVoting(group.id)}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

ScorePointPoll.contextType = MatchContext;
ScorePointPoll.propTypes = {
  data: PropTypes.object.isRequired,
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
  onVolumeScrape: PropTypes.func.isRequired,
  onVotingEnd: PropTypes.func.isRequired,
  onVotingStart: PropTypes.func.isRequired,
  rate: PropTypes.number,
};

ScorePointPoll.defaultProps = {
  layout: 'horizontal',
  rate: 10,
};

export default withStage(GraphContainer(
  withMutation('onVotingStart', queries.startScorePointVoting)(
    withMutation('onVotingEnd', queries.closeLivePollVoting)(
      withMutation('onVolumeScrape', queries.saveVolumeScrape)(ScorePointPoll)
    )
  ),
  queries.getScorePointPoll
));
