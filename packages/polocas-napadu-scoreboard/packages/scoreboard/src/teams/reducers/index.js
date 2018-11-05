import { handleActions } from 'redux-actions';
import { team } from '../actions';

const teamInitialState = {
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
