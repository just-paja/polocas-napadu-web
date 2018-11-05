import { handleActions } from 'redux-actions';

import { MAX_PENALTIES } from '../constants';
import { team } from '../actions';

const teamInitialState = {
  color: '#199638',
  logo: '',
  name: '',
  penalties: 0,
  score: 0,
};

const teamDataReducer = handleActions({
  [team.DATA_CHANGE]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [team.SCORE_INCREASE]: state => ({
    ...state,
    score: state.score + 1,
  }),
  [team.SCORE_DECREASE]: state => ({
    ...state,
    score: state.score > 0 ? state.score - 1 : state.score,
  }),
  [team.PENALTY_INCREASE]: state => ({
    ...state,
    penalties: state.penalties < MAX_PENALTIES ? state.penalties + 1 : state.penalties,
  }),
  [team.PENALTY_DECREASE]: state => ({
    ...state,
    penalties: state.penalties > 0 ? state.penalties - 1 : state.penalties,
  }),
  [team.PENALTY_RESET]: state => ({
    ...state,
    penalties: 0,
  }),
  [team.PENALTIES_SET]: (state, action) => ({
    ...state,
    penalties: action.penalties,
  }),
}, teamInitialState);

export const createTeamReducer = (team, reducer, initialState = teamInitialState) =>
  (state = initialState, action) => {
    if (action && action.meta && action.meta === team) {
      return reducer(state, action);
    }
    return state;
  };

export const createTeamDataReducer = team => createTeamReducer(team, teamDataReducer);
