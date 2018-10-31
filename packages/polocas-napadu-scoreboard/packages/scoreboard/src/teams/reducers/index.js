import { handleActions } from 'redux-actions';

const initialState = {
  logo: '',
  name: '',
}

export const createTeamReducer = routine => handleActions({
  [routine.DATA_CHANGE]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
}, initialState);
