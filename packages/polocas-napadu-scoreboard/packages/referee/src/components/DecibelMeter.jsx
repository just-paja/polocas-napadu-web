import Button from '@material-ui/core/Button';
import Meter from 'decibel-meter';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import { ContestantGroup } from 'core/proptypes';
import { DecibelLevel } from './DecibelLevel';
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

const METER_IDENT = 'DECIBEL_METER';
const ZERO = -100;

class DecibelMeter extends React.Component {
  constructor() {
    super();
    this.state = {
      lastResult: 0,
      micReady: false,
      stopped: false,
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
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.recording && this.props.recording) {
      this.scheduleStop();
    }
  }

  componentWillUnmount() {
    this.meter.disconnect();
  }

  getReasonableDevices(sources) {
    const hasDefault = sources.some(source => source.deviceId === 'default');
    return hasDefault ? ['default'] : sources.map(source => source.deviceId);
  }

  propagateSoundFrame(bels, ...args) {
    const { group, onScrape, recording } = this.props;
    const { stopped } = this.state;
    if (recording && !stopped) {
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
      this.setState({ stopped: false });
      onRecordingStart(group.id);
    }
  }

  recordingStop() {
    const { group, onRecordingStop, recording } = this.props;
    if (recording) {
      this.setState({ stopped: true });
      onRecordingStop(group.id);
    }
    clearTimeout(this.stopTimeout);
  }

  getButtonLabel() {
    const { micReady } = this.state;
    const { recording } = this.props;
    if (recording) {
      return micReady
        ? 'Zastavit'
        : 'Čekám na mikrofon';
    }
    return 'Začít měřit';
  }

  scheduleStop() {
    clearTimeout(this.stopTimeout);
    this.stopTimeout = setTimeout(this.recordingStop, this.props.duration);
  }

  render() {
    const { classes, disabled, group, recording } = this.props;
    const { micReady, volume } = this.state;
    return (
      <div className={classes.meter}>
        <Typography variant="h3">
          {group.band.name}
        </Typography>
        <DecibelLevel value={volume} />
        <Button
          className={classes.control}
          color={micReady && recording ? 'secondary' : 'primary'}
          disabled={disabled && !recording}
          onClick={micReady && recording ? this.recordingStop : this.recordingStart}
          variant="contained"
        >
          {this.getButtonLabel()}
        </Button>
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
  recording: PropTypes.bool,
};

DecibelMeter.defaultProps = {
  disabled: false,
  duration: 5000,
  rate: 50,
  recording: false,
};

export default withStyles(styles)(DecibelMeter);
