import { connect } from 'react-redux';

import TeamSummary from '../components/TeamSummary';

import { getSideTeam, getSideTeamId } from '../../board/selectors';

const mapStateToProps = (state, { side }) => ({
  team: getSideTeam(state, side),
  teamId: getSideTeamId(state, side),
});

export default connect(mapStateToProps)(TeamSummary);
