import PropTypes from 'prop-types';
import React from 'react';

import { VOLUME_SCRAPE_DURATION, VOLUME_SCRAPE_TIMEOUT } from 'core/constants';
import { ResponsiveLine } from '@nivo/line';
import { withStyles } from '@material-ui/core/styles';

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

function hasNewVoting(prevProps, props) {
  return props.poll.votings.some(voting => {
    const prevInstance = prevProps.poll.votings.find(prevVoting => prevVoting.id === voting.id);
    return !voting.closed && (!prevInstance || prevInstance.closed);
  });
}

const styles = theme => ({
  chart: {
    height: '100%',
    display: 'flex',
  },
  countdown: {
    alignItems: 'center',
    background: 'rgba(0,0,0,0.75)',
    color: '#000',
    display: 'flex',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    position: 'fixed',
    textAlign: 'center',
    left: 0,
    right: 0,
    zIndex: 100,
  },
  countdownNumber: {
    background: 'rgba(255,255,255,0.9)',
    fontSize: '50vmin',
    width: '60vmin',
    height: '60vmin',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderRadius: '100%',
  }
})

class VolumeScrapeChartInner extends React.Component {
  static propTypes = {
    duration: PropTypes.number.isRequired,
    poll: PropTypes.object,
    votings: PropTypes.array,
  }

  static defaultProps = {
    duration: VOLUME_SCRAPE_DURATION,
  }

  state = {
    countdown: 0,
  }

  componentDidMount() {
    if (this.props.poll.votings.length === 1 && !this.props.poll.votings[0].closed) {
      this.startCountdown();
    }
  }

  componentDidUpdate(prevProps) {
    if (hasNewVoting(prevProps, this.props)) {
      this.startCountdown();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.countdownTimeout);
  }

  startCountdown() {
    this.setState({ countdown: (VOLUME_SCRAPE_TIMEOUT / 1000) - 1 });
    this.countdownTimeout = setTimeout(() => {
      this.decrementCountdown();
    }, 1000);
  }

  decrementCountdown() {
    const { countdown } = this.state;
    clearTimeout(this.countdownTimeout);
    if (countdown > 0) {
      this.setState({ countdown: countdown - 1 });
      this.countdownTimeout = setTimeout(() => this.decrementCountdown(), 1000);
    }
  }

  getMaxX() {
    return this.props.duration + 1000;
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

  renderTimeout() {
    const { classes } = this.props;
    if (!this.state.countdown) {
      return null;
    }
    return (
      <div className={classes.countdown}>
        <span className={classes.countdownNumber}>
          {this.state.countdown}
        </span>
      </div>
    )
  }

  render() {
    const { classes, votings } = this.props;
    return (
      <div className={classes.chart}>
        {this.renderTimeout()}
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

export const VolumeScrapeChart = withStyles(styles)(VolumeScrapeChartInner);
