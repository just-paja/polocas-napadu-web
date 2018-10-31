import createTeamForm from './createTeamForm';

import { teamHome } from '../../board/actions';
import { getTeamHome } from '../../board/selectors';

import * as constants from '../constants';

export default createTeamForm(
  teamHome,
  getTeamHome,
  constants.FORM_TEAM_HOME,
  'Domácí'
);
