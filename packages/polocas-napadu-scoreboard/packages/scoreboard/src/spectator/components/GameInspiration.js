import PropTypes from 'prop-types';
import React from 'react';

import { MatchContext } from '../../context';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  inspiration: {
    color: 'white',
    fontSize: '4rem',
    textAlign: 'center',
  },
  game: {
    color: 'white',
    fontSize: '2rem',
    textAlign: 'center',
  },
};

class GameInspiration extends React.Component {
  render() {
    const { classes } = this.props;
    const { game } = this.context.match.currentStage;
    if (!game) {
      return null;
    }
    return (
      <div>
        {game.type ? <div className={classes.game}>{game.type}</div> : null}
        {game.inspirations.length > 0
          ? (
            <div className={classes.inspiration}>
              {game.inspirations.map(inspiration => inspiration.text).join(', ')}
            </div>
          ) : null}
      </div>
    );
  };
}

GameInspiration.contextType = MatchContext;

GameInspiration.propTypes = {
  game: PropTypes.shape({
    game: PropTypes.string,
    inspiration: PropTypes.string,
  }),
};

export default withStyles(styles)(GameInspiration);
