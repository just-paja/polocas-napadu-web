import camelCase from 'camelcase';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import TeamScore from './TeamScore';

import { Band } from '../proptypes';

import * as constants from '../board/constants';

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
  render() {
    const { classes, hideScore, side, team } = this.props;
    if (!team || !team.band.name) {
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
            alt="Band logo"
          />
          <span
            className={classnames(classes.name, classes[camelCase(`name-${side}`)])}
          >{team.band.name}</span>
          {hideScore
            ? null
            : <TeamScore score={team.score} backgroundColor={team.color} />}
          <span className={classnames(classes.penalties, classes[camelCase(`penalties-${side}`)])}>
            {generatePenalties(classes, team.penalties)}
          </span>
        </div>
      </div>
    );
  }
}

TeamDetails.propTypes = {
  team: Band.isRequired,
  hideScore: PropTypes.bool,
};

TeamDetails.defaultProps = {
  hideScore: false,
};

export default withStyles(styles)(TeamDetails);
