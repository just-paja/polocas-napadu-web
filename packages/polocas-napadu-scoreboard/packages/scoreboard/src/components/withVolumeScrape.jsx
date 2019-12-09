import moment from 'moment'
import React from 'react'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { VOLUME_SCRAPE_RATE } from 'core/constants'

const GET_ACTIVE_VOLUME_SCRAPE = gql`
  query VolumeScrapeList($livePollVotingId: Int!) {
    volumeScrapeList(livePollVotingId: $livePollVotingId) {
      created,
      volume,
    }
  }
`

function getZeroTime (scrapes) {
  if (scrapes.length === 0) {
    return 0
  }
  return scrapes.reduce((min, scrape) => {
    const val = moment(scrapes[0].created).valueOf()
    return val < min ? val : min
  }, Infinity)
}

function convertScrapesToLine (scrapes) {
  const start = getZeroTime(scrapes)
  return scrapes.map(scrape => ({
    x: moment(scrape.created).valueOf() - start,
    y: scrape.volume
  })).sort((a, b) => a.x - b.x)
}

export const withVolumeScrape = ({ getLineColor }) => WrappedComponent => {
  function getVotingCurve (voting, volumeScrapes) {
    return {
      color: getLineColor && getLineColor(voting),
      data: convertScrapesToLine(voting.volumeScrapes || volumeScrapes),
      id: voting.id
    }
  }

  class VolumeScraper extends React.Component {
    constructor (props) {
      super()
      this.state = {
        scrapes: props.poll.votings.map(getVotingCurve)
      }
      this.handleLoad = this.handleLoad.bind(this)
    }

    getActiveVoting () {
      const { poll } = this.props
      if (poll) {
        return poll.votings.find(voting => !voting.closed)
      }
      return null
    }

    handleLoad (data) {
      const voting = this.getActiveVoting()
      const scrapes = [...this.state.scrapes]
      const targetIndex = this.state.scrapes.findIndex(line => line.id === voting.id)
      const { volumeScrapeList } = data
      if (targetIndex === -1) {
        scrapes.push(getVotingCurve(voting, volumeScrapeList))
      } else {
        scrapes[targetIndex] = {
          ...scrapes[targetIndex],
          data: convertScrapesToLine(volumeScrapeList)
        }
      }
      this.setState({ scrapes })
    }

    renderContent () {
      return (
        <WrappedComponent
          votings={this.state.scrapes}
          {...this.props}
        />
      )
    }

    render () {
      const activeVoting = this.getActiveVoting()
      return (
        <>
          {activeVoting ? (
            <Query
              query={GET_ACTIVE_VOLUME_SCRAPE}
              pollInterval={VOLUME_SCRAPE_RATE}
              variables={{ livePollVotingId: activeVoting.id }}
              onCompleted={this.handleLoad}
            >
              {() => null}
            </Query>
          ) : null}
          {this.renderContent()}
        </>
      )
    }
  }

  return VolumeScraper
}
