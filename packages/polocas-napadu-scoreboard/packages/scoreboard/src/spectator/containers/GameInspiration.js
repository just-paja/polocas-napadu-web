import { connect } from 'react-redux';

import GameInspiration from '../components/GameInspiration';

import { getGameInspiration, getGameName } from '../../board/selectors';

const mapStateToProps = (state) => ({
  gameName: getGameName(state),
  inspiration: getGameInspiration(state),
});

export default connect(mapStateToProps)(GameInspiration);
