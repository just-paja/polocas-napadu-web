import { handleActions } from 'redux-actions';

import { flipSides } from '../actions';

import * as constants from '../constants';

const initialState = {
  left: constants.TEAM_HOME,
  right: constants.TEAM_GUEST,
};

export default handleActions({
  [flipSides.TRIGGER]: state => ({
    left: state.right,
    right: state.left,
  }),
}, initialState);
