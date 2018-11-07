import { combineReducers } from 'redux';

import games from './games';
import sides from './sides';
import stage from './stage';

import { createTeamDataReducer } from '../../teams/reducers';

import * as constants from '../constants';

const teams = combineReducers({
  [constants.TEAM_GUEST]: createTeamDataReducer(constants.TEAM_GUEST),
  [constants.TEAM_HOME]: createTeamDataReducer(constants.TEAM_HOME),
  sides,
});

export default combineReducers({
  games,
  stage,
  teams,
});
