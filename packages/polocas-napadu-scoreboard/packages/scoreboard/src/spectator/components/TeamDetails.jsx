import AnimateOnChange from 'react-animate-on-change';
import camelCase from 'camelcase';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import { getNewRandomItem } from '../../shuffle';

import * as constants from '../../board/constants';

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
  nameBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nameBarRight: {
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row-reverse',
    },
  },
  nameRight: {
    [theme.breakpoints.up('md')]: {
      margin: '0 auto 0 4rem',
    },
  },
  logo: {
    maxHeight: '4.5rem',
    margin: '-0.5rem 1rem -0.5rem 0',
  },
  logoRight: {
    marginLeft: '1rem',
    marginRight: 0,
  },
  penalty: {
    background: 'red',
    display: 'inline-block',
    height: '3rem',
    width: '1.25rem',
    margin: '0 .25rem',
    opacity: .75,
  },
  penalties: {
    position: 'absolute',
    bottom: '-2.9rem',
    right: '8rem',
  },
  penaltiesRight: {
    [theme.breakpoints.up('md')]: {
      right: 'auto',
      left: '8rem',
    },
  },
  teamBubble: {
    background: 'white',
    borderRadius: '3rem',
    flexStretch: 0,
    fontSize: '3rem',
    marginBottom: '5rem',
    padding: '1rem',
    position: 'relative',
  }
});

const generatePenalties = (classes, number) => {
  const items = [];
  for (let i = 0; i < number; i++) {
    items.push(<span key={i} className={classes.penalty}></span>);
  }
  return items;
};

class TeamDetails extends Component {
  constructor() {
    super();
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this);
    this.state = {
      animation: false,
      lastAnimation: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.team.score !== prevProps.team.score) {
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
    const { classes, hideScore, side, team } = this.props;
    if (!team || !team.name) {
      return null;
    }
    return (
      <div className={classes.teamBubble}>
        <div
          className={classnames(
            classes.nameBar,
            classes[camelCase(`nameBar-${side}`)]
          )}
        >
          <img
            className={classnames(classes.logo, classes[camelCase(`logo-${side}`)])}
            src={team.logo || constants.TEAM_LOGO_DEFAULT}
            alt="Team logo"
          />
          <span
            className={classnames(classes.name, classes[camelCase(`name-${side}`)])}
          >{team.name}</span>
          {hideScore ? null : (
            <AnimateOnChange
              baseClassName="animated"
              animationClassName={this.state.animation}
              animate={this.state.animation}
              onAnimationEnd={this.handleAnimationEnd}
            >
              <span
                className={classes.score}
                style={{ backgroundColor: team.color }}
              >
                {team.score}
              </span>
            </AnimateOnChange>
          )}
          <span className={classnames(classes.penalties, classes[camelCase(`penalties-${side}`)])}>
            {generatePenalties(classes, team.penalties)}
          </span>
        </div>
      </div>
    );
  }
}

TeamDetails.propTypes = {
  name: PropTypes.string,
  side: PropTypes.string,
  logo: PropTypes.string,
  hideScore: PropTypes.bool,
};

TeamDetails.defaultProps = {
  hideScore: false,
};

export default withStyles(styles)(TeamDetails);
