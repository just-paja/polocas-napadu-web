import React from 'react';

import { Game } from 'core/proptypes';
import { MatchContext } from 'core/context';
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
  game: Game,
};

export default withStyles(styles)(GameInspiration);
