import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Classes } from '../../proptypes';
import { Team } from '../../teams/proptypes';

const styles = {
  points: {
    fontSize: '6rem',
  },
  numbers: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
  penalty: {
    background: 'red',
    display: 'inline-block',
    height: '3rem',
    width: 4,
    margin: '0 .25rem',
  },
  penalties: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const generatePenalties = (classes, number) => {
  const items = [];
  for (let i = 0; i < number; i++) {
    items.push(<span key={i} className={classes.penalty}></span>);
  }
  console.log(items);
  return items;
};


const Score = ({ classes, teamLeft, teamRight }) => {
  return (
    <div className={classes.scoreBar}>
      <span className={classes.numbers}>
        <span className={classes.points}>{teamLeft.score}</span>
        <span className={classes.penalties}>{generatePenalties(classes, teamLeft.penalties)}</span>
      </span>
      <span className={classes.points}>
        :
      </span>
      <span className={classes.numbers}>
        <span className={classes.points}>{teamRight.score}</span>
        <span className={classes.penalties}>{generatePenalties(classes, teamRight.penalties)}</span>
      </span>
    </div>
  );
};

Score.propTypes = {
  classes: Classes.isRequired,
  teamLeft: Team.isRequired,
  teamRight: Team.isRequired,
};

export default withStyles(styles)(Score);
