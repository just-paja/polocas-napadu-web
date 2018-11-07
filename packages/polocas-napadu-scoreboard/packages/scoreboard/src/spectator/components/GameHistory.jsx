import React, { Component} from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Classes } from '../../proptypes';

const styles = {
  bigFont: {
    fontSize: '4rem',
    textAlign: 'center',
    color: 'white',
  },
  game: {
    color: '#666',
  }
};

class GameHistory extends Component {
  constructor() {
    super();
    this.showNextGame = this.showNextGame.bind(this);
    this.state = {
      showGame: null,
    };
  }

  componentDidMount() {
    if (this.props.games.length) {
      this.setState({ showGame: 0 });
      this.queueNextGame();
    }
  }

  componentWillUnmount() {
    this.unsetTimeout();
  }

  unsetTimeout() {
    clearTimeout(this.timeout);
  }

  queueNextGame() {
    this.unsetTimeout();
    this.timeout = setTimeout(this.showNextGame, 2000);
  }

  showNextGame() {
    const { games } = this.props;
    const { showGame } = this.state;
    const next = showGame < games.length - 1 ? showGame + 1 : 0;
    this.setState({ showGame: next });
    this.queueNextGame();
  }

  render() {
    const { classes, games } = this.props;
    const game = games[this.state.showGame];
    if (!game) {
      return null;
    }
    const inspiration = [game.inspiration, game.extra].filter(item => item);
    return (
      <div className={classes.bigFont}>
        {inspiration.length > 0 ? (
          <div className={classes.inspiration}>
            {inspiration.join(', ')}
          </div>
        ) : null}
        <div className={classes.game}>({game.game})</div>
      </div>
    );
  }
}

GameHistory.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(GameHistory);
