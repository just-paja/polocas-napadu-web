import { handleActions } from 'redux-actions';

export default routine => handleActions({
  [routine.LOGO_CHANGE]: (state, action) => action.payload,
}, '');
