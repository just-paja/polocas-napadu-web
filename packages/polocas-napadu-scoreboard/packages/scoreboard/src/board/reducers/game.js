import { handleActions } from 'redux-actions';

import { game, topic } from '../actions';

export const initialState = {
  uuid: '',
  extra: '',
  game: '',
  inspiration: '',
};

export default handleActions({
  [game.GAME_CHANGE]: (state, action) => ({
    ...state,
    game: action.payload,
  }),
  [game.INSPIRATION_CHANGE]: (state, action) => ({
    ...state,
    inspiration: action.payload.inspiration,
    extra: action.payload.extra,
  }),
  [topic.SUGGEST]: (state, action) => ({
    ...state,
    inspiration: action.payload,
    extra: ''
  })
}, initialState);
