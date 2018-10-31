import { handleActions } from 'redux-actions';

import { spectatorWindow } from '../actions';

const initialState = {
  open: false,
};

export default handleActions({
  [spectatorWindow.CLOSE]: state => ({
    open: false,
  }),
  [spectatorWindow.OPEN]: state => ({
    open: true,
  }),
}, initialState);
