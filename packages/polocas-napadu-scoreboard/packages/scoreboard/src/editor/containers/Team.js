import { connect } from 'react-redux';

import Team from '../components/Team';

import { teamNeedsEdit } from '../selectors';

const mapStateToProps = (state, { side }) => ({
  edit: teamNeedsEdit(state, side),
});

export default connect(mapStateToProps)(Team);
