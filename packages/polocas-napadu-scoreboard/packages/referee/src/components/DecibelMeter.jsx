import Button from '@material-ui/core/Button';
import Meter from 'decibel-meter';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import { throttle } from 'throttle-debounce';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  meter: {
    textAlign: 'center',
  },
  control: {
    marginTop: theme.spacing.unit,
  }
});

const ZERO = -100;

class DecibelMeter extends React.Component {
  constructor() {
    super();
    this.state = {
      maxValue: 0,
      lastResult: 0,
      listening: false,
      volume: 0,
    };
    this.toggleMeasure = this.toggleMeasure.bind(this);
    this.formatter = new Intl.NumberFormat();
    this.meter = new Meter('xx');
  }

  componentDidMount() {
    this.meter.on('connect', () => {
      this.setState({ listening: true });
    });
  }

  componentWillUnmount() {
    if (this.state.listening) {
      this.meter.disconnect();
    }
  }

  listen() {
    this.meter.sources.then((sources) => {
      const hasDefault = sources.some(source => source.deviceId === 'default');
      const devices = hasDefault ? ['default'] : sources.map(source => source.deviceId);
      devices.forEach(deviceId => {
        this.setState({ maxValue: 0, volume: 0 });
        this.meter.listenTo(deviceId, throttle(100, (bels, ...args) => {
          const volume = bels - ZERO;
          this.setState({
            maxValue: Math.max(this.state.maxValue, volume),
            volume
          });
        }));
      });
    });
  }

  toggleMeasure() {
    if (this.state.listening) {
      this.setState({
        listening: false,
        volume: 0,
      });
      this.meter.disconnect();
    } else {
      this.setState({
        maxValue: 0,
        lastResult: this.state.maxValue,
      })
      this.listen();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.meter}>
        <Typography
          variant="h2"
          color={this.state.maxValue > this.state.lastResult ? 'primary' : 'secondary'}
        >
          {this.formatter.format(this.state.maxValue)} dB
        </Typography>
        {this.state.lastResult > 0 ? (
          <Typography
            variant="h2"
            color={this.state.maxValue < this.state.lastResult ? 'primary' : 'secondary'}
          >
            {this.formatter.format(this.state.lastResult)} dB
          </Typography>
        ) : null}
        <Typography variant="subtitle1">
          {this.formatter.format(this.state.volume)} dB
        </Typography>
        <Button
          className={classes.control}
          color={this.state.listening ? 'secondary' : 'primary'}
          onClick={this.toggleMeasure}
          variant="contained"
        >
          {this.state.listening ? 'Zastavit' : 'Začít měřit'}
        </Button>
        <p>
          Decibel [dB], je bezrozměrná jednotka která dává smysl pouze
          v kontextu jednoho zařízení. Neobsahuje akustický tlak a proto
          každé zařízení naměří jinou hodnotu.
        </p>
      </div>
    );
  }
}

DecibelMeter.propTypes = {
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
};

DecibelMeter.defaultProps = {
  layout: 'horizontal',
};

export default withStyles(styles)(DecibelMeter);
