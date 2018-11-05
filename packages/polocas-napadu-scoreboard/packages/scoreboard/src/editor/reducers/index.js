import { combineReducers } from 'redux';

import { TEAM_GUEST, TEAM_HOME } from '../../board/constants';
import { createTeamReducer } from '../../teams/reducers';

import showTeamEdit from './showTeamEdit';

export default combineReducers({
  edit: combineReducers({
    [TEAM_GUEST]: createTeamReducer(TEAM_GUEST, showTeamEdit, false),
    [TEAM_HOME]: createTeamReducer(TEAM_HOME, showTeamEdit, false),
  }),
});
