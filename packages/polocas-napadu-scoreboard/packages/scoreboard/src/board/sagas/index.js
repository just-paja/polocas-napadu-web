import { put, select, takeEvery } from 'redux-saga/effects';

import { getOtherSideTeamId, getTeam } from '../selectors';
import { team } from '../../teams/actions';
import { MAX_PENALTIES } from '../../teams/constants';
import { monitorOnly } from '../../spectator/sagas';

function* increaseOtherSideOnThree(action) {
  const teamData = yield select(getTeam, action.meta);
  if (teamData.penalties === MAX_PENALTIES) {
    const otherTeamId = yield select(getOtherSideTeamId, action.meta);
    yield put(team.scoreIncrease(null, otherTeamId));
    yield put(team.penaltyReset(null, action.meta));
  }
}

const handlePenaltyIncrease = monitorOnly(function* () {
  yield takeEvery(team.PENALTY_INCREASE, increaseOtherSideOnThree);
});

export default [
  handlePenaltyIncrease,
];
