import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import {
  Area,
  AreaChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

import { Stage } from './Stage';

const GET_ACTIVE_VOLUME_SCRAPE = gql`
  query VolumeScrapeList($livePollVotingId: Int!) {
    volumeScrapeList(livePollVotingId: $livePollVotingId) {
      created,
      volume,
    }
  }
`;

const withVolumeScrape = WrappedComponent => {
  class VolumeScraper extends React.Component {
    constructor(props) {
      super();
      this.state = {
        scrapes: this.regroupChartData(props.poll.votings
          .reduce((aggr, voting) => this.getGrouppedScrapes(voting, voting.volumeScrapes, aggr), [])),
      };
      this.handleLoad = this.handleLoad.bind(this);
    }

    getStartTime(zeroData) {
      if (zeroData) {
        return moment(zeroData.created).valueOf();
      }
      return 0;
    }

    getActiveVoting() {
      return this.props.poll.votings.find(voting => !voting.closed);
    }

    getLastVoting() {
      return this.props.poll.votings[this.props.poll.votings.length - 1];
    }

    getPollInterval() {
      return this.getActiveVoting() ? 500 : null;
    }

    getGrouppedScrapes(voting, scrapes, aggr) {
      const startTime = this.getStartTime(scrapes[0]);
      const compat = aggr || this.state.scrapes;
      return scrapes.reduce((aggr, value) => {
        const created = moment(value.created).valueOf() - startTime;
        let target = compat.find(item => item.created === created);
        if (target) {
          target[voting.contestantGroup.id] = value.volume;
        } else {
          aggr.push({
            created: created,
            [voting.contestantGroup.id]: value.volume,
          });
        }
        return aggr;
      }, compat);
    }

    regroupChartData(groupped) {
      return groupped.sort((a, b) => a.created - b.created);
    }

    handleLoad(data) {
      const voting = this.getLastVoting();
      this.setState({
        scrapes: this.regroupChartData(this.getGrouppedScrapes(voting, data.volumeScrapeList)),
      });
    }

    handleLoadAll() {
    }

    render() {
      const activeVoting = this.getActiveVoting();
      const lastVoting = this.getLastVoting()
      const content = (
        <WrappedComponent
          votings={this.state.scrapes}
          {...this.props}
        />
      );
      return (
        <Query
          query={GET_ACTIVE_VOLUME_SCRAPE}
          pollInterval={activeVoting ? 100 : null}
          variables={{ livePollVotingId: lastVoting ? lastVoting.id : undefined }}
          onCompleted={this.handleLoad}
        >
          {() => content}
        </Query>
      );
    }
  }

  return VolumeScraper;
};

class GameVoteChart extends Stage {
  getHorizontalConstraints() {
    const { poll, duration } = this.props;
    const start = moment(poll.created);
    const end = start.clone().add(duration, 'ms');
    return [
      start.valueOf(),
      end.valueOf(),
    ];
  }

  getVerticalConstraints() {
    return [0, 50];
  }

  getAvg(groupId) {
    const filtered = this.props.votings
      .map(voting => voting[groupId])
      .filter(item => !isNaN(item));
    if (filtered.length === 0) {
      return 0;
    }
    return filtered.reduce((aggr, value) => ((aggr + value) / 2));
  }

  renderVotingData(voting) {
    return [
      <ReferenceLine
        key={voting.id}
        stroke={voting.contestantGroup.color}
        y={this.getAvg(voting.contestantGroup.id)}
      />,
      <Area
        dataKey={voting.contestantGroup.id}
        fill={voting.contestantGroup.color}
        key={voting.contestantGroup.id}
        stackId={voting.contestantGroup.id}
        stroke={voting.contestantGroup.color}
        type="step"
        isAnimationActive={false}
      />,
    ];
  }

  render() {
    const { duration, poll, votings } = this.props;
    console.log(votings);
    if (votings.length === 0) {
      return null;
    }
    return (
      <div style={{ height: 400 }}>
        <ResponsiveContainer>
          <AreaChart
            barGap={0}
            barCategoryGap={0}
            barSize={50}
            data={votings.map(voting => ({
              ...voting,
              created: moment(voting.created).valueOf(),
            }))}
          >
            <XAxis
              dataKey="created"
              domain={[0, duration]}
              interval="preserveStartEnd"
              type="number"
            />
            <YAxis
              type="number"
              domain={[0, '50']}
            />
            {poll.votings
              .map(voting => this.renderVotingData(voting))
              .flat()}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  };
}

GameVoteChart.propTypes = {
  votings: PropTypes.array,
  poll: PropTypes.object,
  duration: PropTypes.number.isRequired,
};

GameVoteChart.defaultProps = {
  duration: 5000,
};

export default withVolumeScrape(GameVoteChart);
