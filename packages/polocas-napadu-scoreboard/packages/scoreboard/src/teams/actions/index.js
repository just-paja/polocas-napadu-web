import { createRoutine } from '../../actions/routines';

export const team = createRoutine('TEAM', [
  'DATA_CHANGE',
  'LOGO_CHANGE',
  'NAME_CHANGE',
  'SCORE_DECREASE',
  'SCORE_INCREASE',
]);
