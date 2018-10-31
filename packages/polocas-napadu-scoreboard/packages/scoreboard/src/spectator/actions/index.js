import { createRoutine } from '../../actions/routines';

export const spectatorWindow = createRoutine('SPECTATOR', [
  'CLOSE',
  'OPEN',
]);
