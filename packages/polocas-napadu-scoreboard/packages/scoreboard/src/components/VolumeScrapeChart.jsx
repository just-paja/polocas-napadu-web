import PropTypes from 'prop-types';
import React from 'react';

import { VOLUME_SCRAPE_DURATION } from 'core/constants';
import { ResponsiveLine } from '@nivo/line';

function getAvg(values) {
  return values.length === 0
    ? 0
    : (values.reduce((aggr, value) => aggr + value) / values.length);
}

function getVotingAvg(voting) {
  return getAvg(voting.data.map(point => point.y).filter(item => !isNaN(item)));
}

function getAvgLine(maxX, xScale, yScale, height) {
  return function(voting) {
    const avg = getVotingAvg(voting);
    const yPos = avg === 0 ? height : yScale(avg);
    return (
      <line
        key={voting.id}
        stroke={voting.color}
        strokeWidth="4"
        x1={xScale(0)}
        x2={xScale(maxX)}
        y1={yPos}
        y2={yPos}
      />
    );
  };
}

export class VolumeScrapeChart extends React.Component {
  static propTypes = {
    duration: PropTypes.number.isRequired,
    poll: PropTypes.object,
    votings: PropTypes.array,
  }

  static defaultProps = {
    duration: VOLUME_SCRAPE_DURATION,
  }

  getMaxX() {
    return this.props.duration + 250;
  }

  getRefsComponent() {
    return props => (
      <g>
        {this.props.votings.map(getAvgLine(
          this.getMaxX(),
          props.xScale,
          props.yScale,
          props.height
        ))}
      </g>
    );
  }

  render() {
    const { votings } = this.props;
    if (votings.length === 0) {
      return null;
    }
    return (
      <div style={{ height: 400 }}>
        <ResponsiveLine
          colors={line => line.color}
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
            // Micro optimization: Hide unused layers
            // "grid",
            // "markers",
            // "axes",
            "areas",
            "lines",
            this.getRefsComponent(),
            // "slices",
            // "dots",
            // "legends"
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
