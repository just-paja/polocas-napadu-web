import createTeamForm from './createTeamForm';

import { teamGuest } from '../../board/actions';
import { getTeamGuest } from '../../board/selectors';

export default createTeamForm(teamGuest, getTeamGuest);
