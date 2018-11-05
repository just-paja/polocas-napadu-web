import { combineReducers } from 'redux';

import sides from './sides';

import { createTeamDataReducer } from '../../teams/reducers';

import * as constants from '../constants';

const teams = combineReducers({
  [constants.TEAM_GUEST]: createTeamDataReducer(constants.TEAM_GUEST),
  [constants.TEAM_HOME]: createTeamDataReducer(constants.TEAM_HOME),
  sides,
});

export default combineReducers({
  teams,
});
