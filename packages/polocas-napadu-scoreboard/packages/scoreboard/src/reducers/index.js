import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import { app } from '../actions';

import board from '../board/reducers';
import monitor from '../editor/reducers';
import spectator from '../spectator/reducers';

const combined = combineReducers({
  board,
  form,
  monitor,
  spectator,
});

export default (state, action) => {
  if (action.type === app.RESET) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combined(state, action);
}
