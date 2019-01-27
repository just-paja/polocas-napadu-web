import AnimateOnChange from 'react-animate-on-change';
import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { getNewRandomItem } from '../../shuffle';

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
    this.state = {
      animation: false,
      lastAnimation: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.score !== prevProps.score) {
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
