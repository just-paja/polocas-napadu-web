import { connect } from 'react-redux';

import GameHistory from '../components/GameHistory';

import { getGameHistory } from '../../board/selectors';

const mapStateToProps = (state) => ({
  games: getGameHistory(state),
});

export default connect(mapStateToProps)(GameHistory);
