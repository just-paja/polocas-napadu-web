import { connect } from 'react-redux';

import TeamSummary from '../components/TeamSummary';

import { getSideTeam, getSideTeamId } from '../../board/selectors';
import { team } from '../../teams/actions';

const mapStateToProps = (state, { side }) => ({
  team: getSideTeam(state, side),
  teamId: getSideTeamId(state, side),
});

const mapDispatchToProps = {
  onScoreDecrease: team.scoreDecrease,
  onScoreIncrease: team.scoreIncrease,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  onScoreDecrease: () => dispatchProps.onScoreDecrease(null, stateProps.teamId),
  onScoreIncrease: () => dispatchProps.onScoreIncrease(null, stateProps.teamId),
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TeamSummary);
