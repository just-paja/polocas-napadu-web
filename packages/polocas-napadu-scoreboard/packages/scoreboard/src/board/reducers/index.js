import { combineReducers } from 'redux';

import { teamGuest, teamHome } from '../actions';

import { createTeamReducer } from '../../teams/reducers';

const guest = createTeamReducer(teamGuest);
const home = createTeamReducer(teamHome);

export default combineReducers({
  guest,
  home,
});
