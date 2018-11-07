import { createRoutine } from '../../actions/routines';
import { createListRoutine } from '../../lists';

export const flipSides = createRoutine('FLIP_SIDES', ['TRIGGER']);

export const game = createListRoutine('GAME', [
  'GAME_CHANGE',
  'CHANGE',
  'INSPIRATION_CHANGE',
], 'id');

export const stage = createRoutine('STAGE', [
  'ADD',
  'BACK',
  'FORWARD',
  'GAME_SET',
  'CHANGE',
]);
