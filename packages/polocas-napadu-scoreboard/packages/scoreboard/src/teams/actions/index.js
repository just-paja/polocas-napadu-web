import { createRoutine } from '../../actions/routines';

export const createTeamRoutine = baseName => createRoutine(`TEAM_${baseName}`, [
  'DATA_CHANGE',
  'LOGO_CHANGE',
  'NAME_CHANGE',
]);
