import { handleActions } from 'redux-actions';

import { teamEdit } from '../actions';

export default handleActions({
  [teamEdit.HIDE]: () => false,
  [teamEdit.SHOW]: () => true,
  [teamEdit.TOGGLE]: state => !state,
}, false);
