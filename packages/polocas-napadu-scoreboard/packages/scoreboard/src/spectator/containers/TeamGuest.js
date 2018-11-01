import { connect } from 'react-redux';

import Team from '../components/Team';

import { getTeamGuest } from '../../board/selectors';

const mapStateToProps = (state) => ({
  team: getTeamGuest(state),
});

export default connect(mapStateToProps)(Team);
