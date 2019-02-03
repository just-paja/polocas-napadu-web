import PropTypes from 'prop-types';
import React from 'react';

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
    return (
      <div>
        <span>{(this.state.time + this.props.start)}</span>
        {' '}
        sekund
      </div>
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
