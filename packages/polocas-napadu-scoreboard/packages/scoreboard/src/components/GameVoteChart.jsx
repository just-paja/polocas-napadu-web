import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { ResponsiveLine } from '@nivo/line';

import { Stage } from './Stage';

const GET_ACTIVE_VOLUME_SCRAPE = gql`
  query VolumeScrapeList($livePollVotingId: Int!) {
    volumeScrapeList(livePollVotingId: $livePollVotingId) {
      created,
      volume,
    }
  }
`;

const convertScrapesToLine = (scrapes) => {
  const start = scrapes[0]
    ? moment(scrapes[0].created).valueOf()
    : 0;
  return scrapes.map(scrape => ({
    x: moment(scrape.created).valueOf() - start,
    y: scrape.volume,
  })).sort((a, b) => a.created - b.created);
}

const withVolumeScrape = WrappedComponent => {
  class VolumeScraper extends React.Component {
    constructor(props) {
      super();
      this.state = {
        scrapes: props.poll.votings.map(voting => ({
          id: voting.id,
          color: voting.contestantGroup.color,
          data: convertScrapesToLine(voting.volumeScrapes),
        }))
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

    handleLoad(data) {
      const voting = this.getLastVoting();
      const nextState = [...this.state.scrapes];
      const targetIndex = this.state.scrapes.findIndex(line => line.id === voting.id);
      const lineData = convertScrapesToLine(data.volumeScrapeList);
      if (targetIndex === -1) {
        nextState.push({
          id: voting.id,
          color: voting.contestantGroup.color,
          data: lineData,
        });
      } else {
        nextState[targetIndex] = {
          ...nextState[targetIndex],
          data: lineData,
        };
      }
      this.setState({
        scrapes: nextState,
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

  getAvg(voting) {
    const filtered = voting.data
      .map(point => point.y)
      .filter(item => !isNaN(item));
    if (filtered.length === 0) {
      return 0;
    }
    const sum = filtered.reduce((aggr, value) => aggr + value);
    return sum/filtered.length;
  }

  getMaxX() {
    return this.props.duration + 250;
  }

  render() {
    const { votings } = this.props;
    console.log(votings);
    if (votings.length === 0) {
      return null;
    }
    const refsLayer = props => (
      <g>
        {votings.map(voting => {
          const avg = this.getAvg(voting);
          return (
            <line
              x1={props.xScale(0)}
              x2={props.xScale(this.getMaxX())}
              y1={props.yScale(avg)}
              y2={props.yScale(avg)}
              stroke={voting.color}
              strokeWidth="4"
              key={voting.id}
            />
          );
        })}
      </g>
    );
    // colors={poll.votings.map(voting => voting.contestantGroup.color)}
    return (
      <div style={{ height: 400 }}>
        <ResponsiveLine
          curve="step"
          data={votings}
          enableGridX={false}
          enableArea
          lineWidth={1}
          areaBlendMode="difference"
          enableGridY={false}
          isInteractive={false}
          enablePoints={false}
          layers={[
            "grid",
            "markers",
            "axes",
            "areas",
            "lines",
            refsLayer,
            "slices",
            "dots",
            "legends"
          ]}
          xScale={{
            type: 'linear',
            stacked: false,
            min: -250,
            max: this.getMaxX(),
          }}
        />
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
