import { handleActions } from 'redux-actions';

import { stage } from '../actions';

import * as constants from '../constants';

const initialState = {
  current: {
    game: null,
    stage: constants.STAGE_SHOW_SETUP,
  },
  history: [],
};

export default handleActions({
  [stage.CHANGE]: (state, action) => ({
    ...state,
    current: {
      game: null,
      stage: action.payload,
    },
    history: [
      ...state.history,
      state.current,
    ],
  }),
  [stage.GAME_CHANGE]: (state, action) => ({
    ...state,
    current: {
      ...state.current,
      game: action.payload,
    },
  })
}, initialState);
