import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const zeroPad = number => number < 10 ? `0${number}` : `${number}`;

class Timer extends React.Component {
  constructor() {
    super();
    this.incrementTime = this.incrementTime.bind(this);
    this.state = { time: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(this.incrementTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  incrementTime() {
    this.setState({
      time: this.state.time + 1,
    });
  }

  render() {
    const duration = moment.duration(this.state.time + this.props.start, 'seconds');
    return (
      <span>
        {zeroPad(duration.minutes())}:{zeroPad(duration.seconds())}
      </span>
    );
  };
}

Timer.propTypes = {
  start: PropTypes.number,
};

Timer.defaultProps = {
  start: 0,
};

export default Timer;
