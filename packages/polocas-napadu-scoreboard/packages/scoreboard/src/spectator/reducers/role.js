import { handleActions } from 'redux-actions';

import { spectatorWindow } from '../actions';

import * as constants from '../constants';

const initialState = constants.ROLE_MONITOR;

export default handleActions({
  [spectatorWindow.SET_ROLE]: (state, action) => action.payload,
}, initialState);
