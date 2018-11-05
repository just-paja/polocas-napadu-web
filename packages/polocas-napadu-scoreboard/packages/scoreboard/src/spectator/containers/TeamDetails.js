import { connect } from 'react-redux';

import TeamDetails from '../components/TeamDetails';

import { getSideTeam } from '../../board/selectors';

const mapStateToProps = (state, { side }) => ({
  team: getSideTeam(state, side),
});

export default connect(mapStateToProps)(TeamDetails);
