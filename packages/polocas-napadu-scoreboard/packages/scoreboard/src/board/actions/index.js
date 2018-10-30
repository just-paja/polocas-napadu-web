import camelCase from 'camelcase';

import { createTeamRoutine } from '../../teams/actions';

import * as constants from '../constants';

export const teamGuest = createTeamRoutine(constants.TEAM_GUEST);
export const teamHome = createTeamRoutine(constants.TEAM_HOME);

teamGuest.team = camelCase(constants.TEAM_GUEST);
teamHome.team = camelCase(constants.TEAM_HOME);
