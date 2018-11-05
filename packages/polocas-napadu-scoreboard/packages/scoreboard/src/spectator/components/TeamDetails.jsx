import classnames from 'classnames';
import camelCase from 'camelcase';
import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import * as constants from '../../board/constants';

const styles = {
  name: {
    display: 'flex',
    margin: '0 3rem 0 auto',
  },
  score: {
    borderRadius: '5rem',
    display: 'block',
    flexShrink: 0,
    fontSize: '5rem',
    fontWeight: 'bold',
    margin: '-2rem',
    height: '8rem',
    lineHeight: '8rem',
    width: '8rem',
    textAlign: 'center',
    justifyContent: 'center',
  },
  nameBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nameBarRight: {
    flexDirection: 'row-reverse',
  },
  nameRight: {
    margin: '0 auto 0 3rem',
  },
  logo: {
    maxHeight: '4.5rem',
    margin: '-0.5rem 0',
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
    right: 'auto',
    left: '8rem',
  },
  teamBubble: {
    background: 'white',
    flexStretch: 0,
    padding: '1rem',
    borderRadius: '3rem',
    fontSize: '3rem',
    position: 'relative',
  }
};

const generatePenalties = (classes, number) => {
  const items = [];
  for (let i = 0; i < number; i++) {
    items.push(<span key={i} className={classes.penalty}></span>);
  }
  return items;
};

const TeamDetails = ({ classes, side, team }) => {
  if (!team) {
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
          className={classes.logo}
          src={team.logo || constants.TEAM_LOGO_DEFAULT}
          alt="Team logo"
        />
        <span
          className={classnames(classes.name, classes[camelCase(`name-${side}`)])}
        >{team.name}</span>
        <span
          className={classes.score}
          style={{ backgroundColor: team.color }}
        >{team.score}</span>
        <span className={classnames(classes.penalties, classes[camelCase(`penalties-${side}`)])}>
          {generatePenalties(classes, team.penalties)}
        </span>
      </div>
    </div>
  );
};

TeamDetails.propTypes = {
  name: PropTypes.string,
  side: PropTypes.string,
  logo: PropTypes.string,
};

export default withStyles(styles)(TeamDetails);
