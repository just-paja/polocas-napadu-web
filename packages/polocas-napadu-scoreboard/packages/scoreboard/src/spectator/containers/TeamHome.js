import { connect } from 'react-redux';

import Team from '../components/Team';

import { getTeamHome } from '../../board/selectors';

const mapStateToProps = (state) => ({
  team: getTeamHome(state),
});

export default connect(mapStateToProps)(Team);
