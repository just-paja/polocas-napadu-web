import { connect } from 'react-redux';

import TeamSummary from '../components/TeamSummary';

import { areTeamsEditable, getSideTeam, getSideTeamId } from '../../board/selectors';

const mapStateToProps = (state, { side }) => ({
  allowEdit: areTeamsEditable(state),
  team: getSideTeam(state, side),
  teamId: getSideTeamId(state, side),
});

export default connect(mapStateToProps)(TeamSummary);
