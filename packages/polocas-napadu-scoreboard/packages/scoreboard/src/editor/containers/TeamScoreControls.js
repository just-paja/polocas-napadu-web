import { connect } from 'react-redux';

import TeamScoreControls from '../components/TeamScoreControls';

import { getTeam, areScoreChangesAllowed } from '../../board/selectors';
import { team } from '../../teams/actions';

const mapStateToProps = (state, { teamId }) => ({
  allowScoreChanges: areScoreChangesAllowed(state),
  team: getTeam(state, teamId),
});

const mapDispatchToProps = (dispatch, { teamId }) => ({
  onPenaltyDecrease: () => dispatch(team.penaltyDecrease(null, teamId)),
  onPenaltyIncrease: () => dispatch(team.penaltyIncrease(null, teamId)),
  onScoreDecrease: () => dispatch(team.scoreDecrease(null, teamId)),
  onScoreIncrease: () => dispatch(team.scoreIncrease(null, teamId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamScoreControls);
