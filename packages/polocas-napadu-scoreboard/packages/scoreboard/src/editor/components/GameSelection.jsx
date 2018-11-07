import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import GameSelectForm from '../containers/GameSelectForm';
import InspirationForm from '../containers/InspirationForm';

import { Classes } from '../../proptypes';

const styles = theme => ({
  bg: {
    maxWidth: 500,
    margin: '0 auto',
  },
  form: {
    background: theme.palette.background.default,
    margin: '0 auto',
    marginTop: 2 * theme.spacing.unit,
    padding: 4 * theme.spacing.unit,
  },
  stageControl: {
    padding: '0 2rem 1rem',
  },
});

const GameSelection = ({ classes, currentGame, isVisible }) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div className={classes.bg}>
      <div className={classes.form}>
        <Typography variant="display1">Game selection</Typography>
        <GameSelectForm />
        {currentGame ? (
          <div>
            <hr />
            <Typography variant="display1">Inspiration</Typography>
            <InspirationForm />
          </div>
        ) : null}
      </div>
    </div>
  );
};

GameSelection.propTypes = {
  classes: Classes.isRequired,
  currentGame: PropTypes.object,
  isVisible: PropTypes.bool,
};

GameSelection.defaultProps = {
  isVisible: false,
};

export default withStyles(styles)(GameSelection);
