import { connect } from 'react-redux';

import Score from '../components/Score';

import { getScore } from '../../board/selectors';
import { TEAM_LEFT, TEAM_RIGHT } from '../../board/constants';

const mapStateToProps = (state) => ({
  scoreLeft: getScore(state, TEAM_LEFT),
  scoreRight: getScore(state, TEAM_RIGHT),
});

export default connect(mapStateToProps)(Score);
