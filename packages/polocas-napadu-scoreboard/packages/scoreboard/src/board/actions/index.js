import { createRoutine } from '../../actions/routines';
import { createListRoutine } from '../../lists';

export const flipSides = createRoutine('FLIP_SIDES', ['TRIGGER']);

export const game = createListRoutine('GAME', [
  'EXTRA_CHANGE',
  'GAME_CHANGE',
  'INSPIRATION_CHANGE',
]);

export const stage = createRoutine('STAGE', [
  'CHANGE',
  'GAME_CHANGE',
]);
