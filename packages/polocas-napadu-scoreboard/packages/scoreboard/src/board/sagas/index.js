import { put, select, takeEvery } from 'redux-saga/effects';

import { getOtherSideTeamId, getTeam } from '../selectors';
import { game, stage } from '../actions';
import { team } from '../../teams/actions';
import { MAX_PENALTIES } from '../../teams/constants';
import { getLastGameId } from '../../board/selectors';
import { monitorOnly } from '../../spectator/sagas';

function* increaseOtherSideOnThree(action) {
  const teamData = yield select(getTeam, action.meta);
  if (teamData.penalties === MAX_PENALTIES) {
    const otherTeamId = yield select(getOtherSideTeamId, action.meta);
    yield put(team.scoreIncrease(null, otherTeamId));
    yield put(team.penaltyReset(null, action.meta));
  }
}

function* stageGameSet() {
  const lastGameId = yield select(getLastGameId);
  yield put(stage.gameSet(lastGameId));
}

const handlePenaltyIncrease = monitorOnly(function* () {
  yield takeEvery(team.PENALTY_INCREASE, increaseOtherSideOnThree);
});

function* handleGameAdd() {
  yield takeEvery(game.ADD, stageGameSet);
}

export default [
  handleGameAdd,
  handlePenaltyIncrease,
];
