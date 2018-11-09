import { put, select, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { getNewRandomItem } from '../../shuffle';
import { getCurrentGameId, getOtherSideTeamId, getTeam } from '../selectors';
import { game, stage, topic } from '../actions';
import { team } from '../../teams/actions';
import { MAX_PENALTIES } from '../../teams/constants';
import { getLastGameId, getAvailableInspirations } from '../../board/selectors';
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

const GENERATOR_MAX_ITERATIONS = 50;

function* generateInspiration() {
  const availableInspirations = yield select(getAvailableInspirations);
  const activeGame = yield select(getCurrentGameId);
  let iteration = 0;
  let last = null;
  while (iteration < GENERATOR_MAX_ITERATIONS) {
    last = getNewRandomItem(availableInspirations, last);
    yield put(topic.suggest(last, { id: activeGame }));
    yield delay(10);
    iteration += 1;
  }
}

const handlePenaltyIncrease = monitorOnly(function* () {
  yield takeEvery(team.PENALTY_INCREASE, increaseOtherSideOnThree);
});

function* handleGameAdd() {
  yield takeEvery(game.ADD, stageGameSet);
}

const handleInspirationGenerate = monitorOnly(function* () {
  yield takeEvery(topic.GENERATE, generateInspiration);
});

export default [
  handleGameAdd,
  handlePenaltyIncrease,
  handleInspirationGenerate,
];
