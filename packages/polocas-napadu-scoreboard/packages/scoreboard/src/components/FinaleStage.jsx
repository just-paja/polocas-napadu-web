import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Teams from './Teams';
import GameHistory from './GameHistory';

import { Classes } from '../proptypes';

const styles = {
  text: {
    fontSize: '3rem',
    textAlign: 'center',
    color: 'white',
  },
  center: {
    justifyContent: 'center',
    display: 'flex',
  },
};

const FinaleStage = ({ classes }) => (
  <div>
    <Teams />
    <p className={classes.text}>Děkujeme, přijďte zas!</p>
    <div className={classes.center}>
      <GameHistory />
    </div>
    <p className={classes.text}>www.polocas-napadu.cz</p>
  </div>
);

FinaleStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(FinaleStage);
