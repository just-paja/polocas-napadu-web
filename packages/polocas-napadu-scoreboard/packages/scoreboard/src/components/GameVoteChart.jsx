import moment from 'moment';
import React from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { VOLUME_SCRAPE_RATE } from 'core/constants';
import { VolumeScrapeChart } from './VolumeScrapeChart';

const GET_ACTIVE_VOLUME_SCRAPE = gql`
  query VolumeScrapeList($livePollVotingId: Int!) {
    volumeScrapeList(livePollVotingId: $livePollVotingId) {
      created,
      volume,
    }
  }
`;

function getZeroTime(scrapes) {
  return scrapes[0]
    ? moment(scrapes[0].created).valueOf()
    : 0;
}

function convertScrapesToLine(scrapes) {
  const start = getZeroTime(scrapes);
  return scrapes.map(scrape => ({
    x: moment(scrape.created).valueOf() - start,
    y: scrape.volume,
  })).sort((a, b) => a.created - b.created);
}


const withScorePointScrape = ({ getLineColor }) => WrappedComponent => {
  function getVotingCurve(voting, volumeScrapes) {
    return {
      color: getLineColor && getLineColor(voting),
      data: convertScrapesToLine(voting.volumeScrapes || volumeScrapes),
      id: voting.id,
    };
  }

  class VolumeScraper extends React.Component {
    constructor(props) {
      super();
      this.state = {
        scrapes: props.poll.votings.map(getVotingCurve)
      };
      this.handleLoad = this.handleLoad.bind(this);
    }

    getActiveVoting() {
      return this.props.poll.votings.find(voting => !voting.closed);
    }

    handleLoad(data) {
      const voting = this.getActiveVoting();
      const nextState = [...this.state.scrapes];
      const targetIndex = this.state.scrapes.findIndex(line => line.id === voting.id);
      const { volumeScrapeList } = data;
      if (targetIndex === -1) {
        nextState.push(getVotingCurve(voting, volumeScrapeList));
      } else {
        nextState[targetIndex] = {
          ...nextState[targetIndex],
          data: convertScrapesToLine(volumeScrapeList),
        };
      }
      this.setState({
        scrapes: nextState,
      });
    }

    render() {
      const activeVoting = this.getActiveVoting();
      const content = (
        <WrappedComponent
          votings={this.state.scrapes}
          {...this.props}
        />
      );
      if (!activeVoting) {
        return content;
      }
      return (
        <Query
          query={GET_ACTIVE_VOLUME_SCRAPE}
          pollInterval={VOLUME_SCRAPE_RATE}
          variables={{ livePollVotingId: activeVoting.id }}
          onCompleted={this.handleLoad}
        >
          {() => content}
        </Query>
      );
    }
  }

  return VolumeScraper;
};

export default withScorePointScrape({
  getLineColor: line => line.contestantGroup.color,
})(VolumeScrapeChart);
