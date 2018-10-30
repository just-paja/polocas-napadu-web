import createTeamForm from './createTeamForm';

import { teamHome } from '../../board/actions';
import { getTeamHome } from '../../board/selectors';

export default createTeamForm(teamHome, getTeamHome);
