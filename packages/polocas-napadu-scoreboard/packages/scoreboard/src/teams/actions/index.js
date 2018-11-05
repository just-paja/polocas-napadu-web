import { createRoutine } from '../../actions/routines';

export const team = createRoutine('TEAM', [
  'DATA_CHANGE',
  'LOGO_CHANGE',
  'NAME_CHANGE',
  'PENALTY_DECREASE',
  'PENALTY_INCREASE',
  'PENALTY_RESET',
  'SCORE_DECREASE',
  'SCORE_INCREASE',
]);
