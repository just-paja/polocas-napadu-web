import { connect } from 'react-redux';

import EditTeamButton from '../components/EditTeamButton';

import { teamEdit } from '../actions';

const mapStateToProps = undefined;

const mapDispatchToProps = (dispatch, { teamId }) => ({
  onClick: () => dispatch(teamEdit.toggle(null, teamId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTeamButton);
