import AnimateOnChange from 'react-animate-on-change';
import PropTypes from 'prop-types';
import React from 'react';

import { Howl } from 'howler';
import { withStyles } from '@material-ui/core/styles';

import { AudioManager } from '../AudioManager';
import { getNewRandomItem } from '../shuffle';

import point8bit from '../sounds/point-8bit.wav';
import pointDistortionGuitar from '../sounds/point-distortion-guitar.wav';
import pointHalelujah from '../sounds/point-halelujah.wav';
import pointSynth01 from '../sounds/point-synth-01.wav';
import pointSynth02 from '../sounds/point-synth-02.wav';
import pointSynthBaseball from '../sounds/point-synth-baseball.wav';
import pointWindows from '../sounds/point-windows.wav';

const availableFanfares = [
  point8bit,
  pointDistortionGuitar,
  pointHalelujah,
  pointSynth01,
  pointSynth02,
  pointSynthBaseball,
  pointWindows,
];

const fanfares = availableFanfares.map((sound) => {
  AudioManager.store(sound, new Howl({
    src: [sound],
  }));
  return sound;
});

const styles = theme => ({
  '@keyframes highlightScore' : {
    '0%': {
      opacity: 0,
      transform: 'scale(3) translate(-50%, 100%)',
    },
    '20%': {
      opacity: 1,
    },
    '80%': {
      transform: 'scale(3.5) translate(-50%, 100%)',
    },
    '100%': {
      transform: 'scale(1) translate(0, 0)',
      opacity: 1,
    }
  },
  name: {
    display: 'flex',
    margin: '0 4rem 0 auto',
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  animate: {
    animationDuration: '3s',
  },
  appear: {
    animationName: 'highlightScore',
    zIndex: 10000,
  },
  score: {
    borderRadius: '5rem',
    color: '#fff',
    display: 'block',
    flexShrink: 0,
    fontSize: '6rem',
    fontWeight: 'bold',
    margin: '-3rem',
    height: '10rem',
    lineHeight: '10rem',
    width: '10rem',
    textAlign: 'center',
    justifyContent: 'center',
  },
});

class TeamScore extends React.PureComponent {
  constructor() {
    super();
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
    this.lastFanfare = null;
    this.state = {
      animation: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.score !== prevProps.score) {
      if (this.props.score > prevProps.score) {
        this.playFanfare();
      }
      this.setState({
        animation: true,
      });
    }
  }

  handleAnimationEnd() {
    this.setState({
      animation: false,
    });
  }

  playFanfare() {
    const soundId = getNewRandomItem(fanfares, this.lastFanfare);
    this.lastFanfare = soundId;
    console.log(soundId);
    AudioManager.play(soundId);
  }

  render() {
    const { classes, backgroundColor, score } = this.props;
    return (
      <AnimateOnChange
        baseClassName={classes.animate}
        animationClassName={classes.appear}
        animate={Boolean(this.state.animation)}
        onAnimationEnd={this.handleAnimationEnd}
      >
        <span
          className={classes.score}
          style={{ backgroundColor }}
        >
          {score}
        </span>
      </AnimateOnChange>
    );
  }
}

TeamScore.propTypes = {
  backgroundColor: PropTypes.string,
  score: PropTypes.number.isRequired,
};

TeamScore.defaultProps = {
  backgroundColor: '#ccc',
};

export default withStyles(styles)(TeamScore);
