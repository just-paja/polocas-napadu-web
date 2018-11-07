import { handleActions } from 'redux-actions';

import { stage } from '../actions';

import * as constants from '../constants';

const initialState = {
  current: 0,
  history: [
    {
      game: null,
      stage: constants.STAGE_SHOW_SETUP,
    },
  ],
};

export default handleActions({
  [stage.BACK]: state => (state.current === 0 ? state : {
    ...state,
    current: state.current - 1,
  }),
  [stage.FORWARD]: state => (state.current >= (state.history.length - 1) ? state : {
    ...state,
    current: state.current + 1,
  }),
  [stage.CHANGE]: (state, action) => {
    const nextStage = {
      stage: action.payload,
      game: null,
    };
    const lastIndex = state.history.length - 1;
    const currentStage = state.history[lastIndex];

    if (
      constants.STAGES_WITH_GAME.indexOf(currentStage.stage) !== -1 &&
      constants.STAGES_GAME_RESET.indexOf(currentStage.stage) === -1
    ) {
      nextStage.game = state.history[lastIndex].game;
    }

    return {
      ...state,
      current: state.history.length,
      history: [
        ...state.history,
        nextStage,
      ],
    };
  },
  [stage.GAME_SET]: (state, action) => {
    const lastIndex = state.history.length - 1;
    const last = state.history[lastIndex];
    const history = [...state.history];
    history[lastIndex] = {
      ...last,
      game: action.payload,
    };
    return {
      ...state,
      history: history,
    };
  },
}, initialState);
