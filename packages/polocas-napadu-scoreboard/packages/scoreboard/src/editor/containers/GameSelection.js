import { connect } from 'react-redux';

import GameSelection from '../components/GameSelection';

import { areGamesEditable, getCurrentGame } from '../../board/selectors';

const mapStateToProps = state => ({
  isVisible: areGamesEditable(state),
  currentGame: getCurrentGame(state),
});

export default connect(mapStateToProps)(GameSelection);
