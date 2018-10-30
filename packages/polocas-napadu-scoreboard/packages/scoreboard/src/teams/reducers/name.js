import { handleActions } from 'redux-actions';

export default routine => handleActions({
  [routine.NAME_CHANGE]: (state, action) => action.payload,
}, '');
