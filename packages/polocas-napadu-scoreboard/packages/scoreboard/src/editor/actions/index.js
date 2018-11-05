import { createRoutine } from '../../actions/routines';

export const teamEdit = createRoutine('TEAM_EDIT', [
  'HIDE',
  'SHOW',
  'TOGGLE',
]);
