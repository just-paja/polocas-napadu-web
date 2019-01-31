import AnimateOnChange from 'react-animate-on-change';
import PropTypes from 'prop-types';
import React from 'react';

import { Howl } from 'howler';
import { withStyles } from '@material-ui/core/styles';

import { AudioManager } from '../AudioManager';
import { getNewRandomItem } from '../shuffle';

import 'animate.css';

const availableFanfares = [
  '/sounds/point-8bit.wav',
  '/sounds/point-distortion-guitar.wav',
  '/sounds/point-halelujah.wav',
  '/sounds/point-synth-01.wav',
  '/sounds/point-synth-02.wav',
  '/sounds/point-synth-baseball.wav',
  '/sounds/point-windows.wav',
];

const fanfares = availableFanfares.map((sound) => {
  AudioManager.store(sound, new Howl({
    src: [sound],
  }));
  return sound;
});

const animations = [
  'bounce',
  'flash',
  'hinge',
  'jackInTheBox',
  'jello',
  'pulse',
  'rollIn',
  'rotateIn',
  'rubberBand',
  'shake',
  'swing',
  'tada',
  'wobble',
  'zoomIn',
];

const styles = theme => ({
  name: {
    display: 'flex',
    margin: '0 4rem 0 auto',
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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
      lastAnimation: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.score !== prevProps.score) {
      if (this.props.score > prevProps.score) {
        this.playFanfare();
      }
      this.setState({
        animation: getNewRandomItem(animations, this.state.lastAnimation),
      });
    }
  }

  handleAnimationEnd() {
    this.setState({
      animation: false,
      lastAnimation: this.state.lastAnimation,
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
        baseClassName="animated"
        animationClassName={this.state.animation}
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
