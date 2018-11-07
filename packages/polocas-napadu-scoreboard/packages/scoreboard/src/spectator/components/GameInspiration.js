import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  inspiration: {
    color: 'white',
    fontSize: '3rem',
    textAlign: 'center',
  },
  game: {
    color: 'white',
    fontSize: '2rem',
    textAlign: 'center',
  },
};

const GameInspiration = ({ classes, game }) => {
  if (!game) {
    return null;
  }
  return (
    <div>
      {game.game ? <div className={classes.game}>{game.game}</div> : null}
      {game.inspiration ? <div className={classes.inspiration}>{game.inspiration}</div> : null}
      {game.extra ? <div className={classes.inspiration}>{game.extra}</div> : null}
    </div>
  );
};

GameInspiration.propTypes = {
  game: PropTypes.shape({
    game: PropTypes.string,
    extra: PropTypes.string,
    inspiration: PropTypes.string,
  }),
};

export default withStyles(styles)(GameInspiration);
