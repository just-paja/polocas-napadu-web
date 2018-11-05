import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import TeamDetailsForm from '../components/TeamDetailsForm';

import { team } from '../../teams/actions';
import { getSideTeam, getSideTeamId } from '../../board/selectors';
import { FORM_TEAM_DETAILS } from '../constants';

const mapStateToProps = (state, { side }) => {
  const teamId = getSideTeamId(state, side);
  return {
    form: `${FORM_TEAM_DETAILS}/${teamId}`,
    initialValues: getSideTeam(state, side),
    teamId,
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (values, teamId) => dispatch(team.dataChange(values, teamId)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  onSubmit: values => dispatchProps.onSubmit(values, stateProps.teamId),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(reduxForm()(TeamDetailsForm));
