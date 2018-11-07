import { connect } from 'react-redux';

import GameInspiration from '../components/GameInspiration';

import { getCurrentGame } from '../../board/selectors';

const mapStateToProps = (state) => ({
  game: getCurrentGame(state),
});

export default connect(mapStateToProps)(GameInspiration);
