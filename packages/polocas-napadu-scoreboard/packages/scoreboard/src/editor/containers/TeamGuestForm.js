import createTeamForm from './createTeamForm';

import { teamGuest } from '../../board/actions';
import { getTeamGuest } from '../../board/selectors';

import * as constants from '../constants';

export default createTeamForm(
  teamGuest,
  getTeamGuest,
  constants.FORM_TEAM_GUEST,
  'Hosté'
);
