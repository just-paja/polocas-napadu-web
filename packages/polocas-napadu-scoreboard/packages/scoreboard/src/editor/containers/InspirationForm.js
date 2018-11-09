import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import InspirationForm from '../components/InspirationForm';

import { getCurrentGameId } from '../../board/selectors';
import { game } from '../../board/actions';

import * as constants from '../constants';

const mapStateToProps = state => ({
  currentGameId: getCurrentGameId(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (values, currentGameId) => {
    dispatch(game.inspirationChange(currentGameId, values));
  },
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  onSubmit: values => dispatchProps.onSubmit(values, stateProps.currentGameId),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxForm({
  form: constants.FORM_GAME_INSPIRATION,
})(InspirationForm));
