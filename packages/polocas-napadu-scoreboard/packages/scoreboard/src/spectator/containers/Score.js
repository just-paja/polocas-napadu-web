import { connect } from 'react-redux';

import Score from '../components/Score';

import { getSideTeam } from '../../board/selectors';
import { TEAM_LEFT, TEAM_RIGHT } from '../../board/constants';

const mapStateToProps = (state) => ({
  teamLeft: getSideTeam(state, TEAM_LEFT),
  teamRight: getSideTeam(state, TEAM_RIGHT),
});

export default connect(mapStateToProps)(Score);
