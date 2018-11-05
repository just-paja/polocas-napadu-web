import { createRoutine } from '../../actions/routines';

export const spectatorWindow = createRoutine('SPECTATOR', [
  'CLOSE',
  'INIT',
  'JOIN',
  'OPEN',
  'SET_ROLE',
]);
