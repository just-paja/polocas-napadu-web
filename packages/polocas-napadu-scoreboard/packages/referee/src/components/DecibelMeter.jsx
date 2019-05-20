import Button from '@material-ui/core/Button';
import Meter from 'decibel-meter';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import { ContestantGroup } from 'core/proptypes';
import { DecibelMeterValues } from './DecibelMeterValues';
import { throttle } from 'throttle-debounce';
import { withStyles } from '@material-ui/core/styles';
import {
  VOLUME_SCRAPE_DURATION,
  VOLUME_SCRAPE_RATE,
  VOLUME_SCRAPE_TIMEOUT,
} from 'core/constants';

const styles = theme => ({
  meter: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    textAlign: 'left',
  },
  controls: {
    marginTop: theme.spacing.unit,
    display: 'flex',
  },
  control: {
    marginRight: theme.spacing.unit * 2
  }
});

const METER_IDENT = 'DECIBEL_METER';
const ZERO = -100;

class DecibelMeter extends React.Component {
  constructor() {
    super();
    this.state = {
      lastResult: 0,
      micReady: false,
      stopped: true,
      timeout: 0,
      volume: 0,
    };
    this.meter = new Meter(METER_IDENT);
    this.propagateSoundFrame = this.propagateSoundFrame.bind(this);
    this.recordingStart = this.recordingStart.bind(this);
    this.recordingStop = this.recordingStop.bind(this);
    this.setMicReady = this.setMicReady.bind(this);
  }

  componentDidMount() {
    this.meter.on('connect', this.setMicReady);
    this.listen();
    if (this.props.recording) {
      this.enablePassTrough();
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.recording && this.props.recording) {
      this.countdownPassTrough()
    }
  }

  componentWillUnmount() {
    this.meter.disconnect();
    clearTimeout(this.passTroughTimeout);
  }

  countdownPassTrough() {
    this.setState({ timeout: VOLUME_SCRAPE_TIMEOUT / 1000 });
    this.enablePassTrough();
  }

  enablePassTrough() {
    this.passTroughTimeout = setTimeout(() => {
      if (this.state.timeout <= 0) {
        this.scheduleStop();
        this.setState({
          stopped: false,
          timeout: 0
        });
      } else {
        this.setState({
          stopped: false,
          timeout: this.state.timeout - 1,
        });
        this.enablePassTrough();
      }
    }, 1000);
  }

  getReasonableDevices(sources) {
    const hasDefault = sources.some(source => source.deviceId === 'default');
    return hasDefault ? ['default'] : sources.map(source => source.deviceId);
  }

  propagateSoundFrame(bels, ...args) {
    const { group, onScrape, recording } = this.props;
    const { stopped, timeout } = this.state;
    if (recording && !stopped && !timeout) {
      const volume = bels - ZERO;
      this.setState({ volume });
      onScrape(group.id, volume);
    }
  }

  setMicReady() {
    this.setState({ micReady: true });
  }

  listen() {
    const { rate } = this.props;
    this.meter.sources.then((sources) => {
      this.getReasonableDevices(sources).forEach(deviceId => {
        this.setState({ volume: 0 });
        this.meter.listenTo(deviceId, throttle(rate, this.propagateSoundFrame));
      });
    });
  }

  recordingStart() {
    const { group, onRecordingStart, recording } = this.props;
    if (!recording) {
      onRecordingStart(group.id);
    }
  }

  recordingStop() {
    const { group, onRecordingStop, recording } = this.props;
    const { timeout } = this.state;
    if (timeout) {
      clearTimeout(this.passTroughTimeout);
      this.setState({ timeout: 0 });
    }
    if (recording) {
      this.setState({ stopped: true });
      onRecordingStop(group.id);
    }
    clearTimeout(this.stopTimeout);
  }

  getButtonColor() {
    const { micReady, recording, result } = this.props;
    if (micReady && recording) {
      return 'secondary';
    }
    if (result) {
      return 'default'
    }
    return 'primary';
  }

  getButtonLabel() {
    const { micReady, timeout } = this.state;
    const { recording, result } = this.props;
    if (timeout > 0) {
      return timeout;
    }
    if (recording) {
      return micReady
        ? 'Zastavit'
        : 'Čekám na mikrofon';
    }
    if (result) {
      return 'Opakovat';
    }
    return 'Začít měřit';
  }

  scheduleStop() {
    clearTimeout(this.stopTimeout);
    this.stopTimeout = setTimeout(this.recordingStop, this.props.duration);
  }

  render() {
    const { classes, disabled, group, recording, result } = this.props;
    const { micReady, stopped, timeout, volume } = this.state;
    return (
      <div className={classes.meter}>
        <Typography variant="h3">
          {group.band.name}
        </Typography>
        <div className={classes.controls}>
          <Button
            className={classes.control}
            color={this.getButtonColor()}
            disabled={!timeout && ((disabled && !recording) || (recording && stopped))}
            onClick={timeout || (micReady && recording) ? this.recordingStop : this.recordingStart}
            variant="contained"
          >
            {this.getButtonLabel()}
          </Button>
          <DecibelMeterValues current={volume} result={result} />
        </div>
      </div>
    );
  }
}

DecibelMeter.propTypes = {
  disabled: PropTypes.bool,
  duration: PropTypes.number,
  group: ContestantGroup.isRequired,
  onRecordingStart: PropTypes.func.isRequired,
  onRecordingStop: PropTypes.func.isRequired,
  onScrape: PropTypes.func.isRequired,
  rate: PropTypes.number,
  result: PropTypes.number,
  recording: PropTypes.bool,
};

DecibelMeter.defaultProps = {
  disabled: false,
  duration: VOLUME_SCRAPE_DURATION,
  rate: VOLUME_SCRAPE_RATE,
  recording: false,
};

export default withStyles(styles)(DecibelMeter);
