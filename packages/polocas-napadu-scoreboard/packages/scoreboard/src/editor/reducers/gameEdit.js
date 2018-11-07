import { handleActions } from 'redux-actions';

import { gameEdit } from '../actions';

export default handleActions({
  [gameEdit.HIDE]: () => false,
  [gameEdit.SHOW]: (state, action) => action.payload,
}, false);
