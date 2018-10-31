import { createRoutine } from '../../actions/routines';
import { createTeamRoutine } from '../../teams/actions';

import * as constants from '../constants';

export const teamGuest = createTeamRoutine(constants.TEAM_GUEST);
export const teamHome = createTeamRoutine(constants.TEAM_HOME);

teamGuest.team = constants.TEAM_GUEST;
teamHome.team = constants.TEAM_HOME;

export const flipSides = createRoutine('FLIP_SIDES', ['TRIGGER']);
