import { combineReducers } from 'redux';

import logo from './logo';
import name from './name';

export const createTeamReducer = routine => combineReducers({
  logo: logo(routine),
  name: name(routine),
});
