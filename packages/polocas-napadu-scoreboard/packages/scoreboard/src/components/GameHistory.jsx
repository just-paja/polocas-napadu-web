import React, { Component} from 'react';

import { gql } from 'apollo-boost';
import { withStyles } from '@material-ui/core/styles';

import GraphContainer from './GraphContainer';

import { Classes } from '../proptypes';

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

const GET_MATCH_GAMES = gql`
  query Games($matchId: Int!) {
    match(id: $matchId) {
      show {
        games {
          type,
          inspirations {
            text,
          }
        }
      }
    }
  }
`;

class GameHistory extends Component {
  constructor() {
    super();
    this.showNextGame = this.showNextGame.bind(this);
    this.state = {
      showGame: null,
    };
  }

  componentDidMount() {
    if (this.games.length) {
      this.setState({ showGame: 0 });
      this.queueNextGame();
    }
  }

  componentWillUnmount() {
    this.unsetTimeout();
  }

  get games() {
    return this.props.data.match.show.games;
  }

  unsetTimeout() {
    clearTimeout(this.timeout);
  }

  queueNextGame() {
    this.unsetTimeout();
    this.timeout = setTimeout(this.showNextGame, 2000);
  }

  showNextGame() {
    const { showGame } = this.state;
    const next = showGame < this.games.length - 1 ? showGame + 1 : 0;
    this.setState({ showGame: next });
    this.queueNextGame();
  }

  render() {
    const { classes } = this.props;
    const game = this.games[this.state.showGame];
    if (!game) {
      return null;
    }
    return (
      <div className={classes.bigFont}>
        {game.inspirations.length > 0 ? (
          <div className={classes.inspiration}>
            {game.inspirations.map(inspiration => inspiration.text).join(', ')}
          </div>
        ) : null}
        <div className={classes.game}>({game.type})</div>
      </div>
    );
  }
}

GameHistory.propTypes = {
  classes: Classes.isRequired,
};

export default GraphContainer(
  withStyles(styles)(GameHistory),
  GET_MATCH_GAMES
);
