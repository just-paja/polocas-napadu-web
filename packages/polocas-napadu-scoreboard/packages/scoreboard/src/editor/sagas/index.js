import { put, select, takeEvery } from 'redux-saga/effects';

import { spectatorWindow } from '../../spectator/actions';
import { game } from '../../board/actions';
import { team } from '../../teams/actions';
import { gameEdit, teamEdit } from '../actions';
import { monitorOnly } from '../../spectator/sagas';

function* syncWindow() {
  const state = yield select(state => state);
  yield put(spectatorWindow.init({
    board: state.board,
  }));
}

function* closeTeamForm(action) {
  yield put(teamEdit.hide(null, action.meta));
}

function* closeGameForm(action) {
  yield put(gameEdit.hide());
}

const handleSpectatorJoin = monitorOnly(function* () {
  yield takeEvery(spectatorWindow.JOIN, syncWindow);
});

const handleTeamEditSubmit = monitorOnly(function* () {
  yield takeEvery(team.DATA_CHANGE, closeTeamForm);
});

const handleGameEditSubmit = monitorOnly(function* () {
  yield takeEvery([game.CHANGE, game.ADD], closeGameForm);
});

export default [
  handleSpectatorJoin,
  handleTeamEditSubmit,
  handleGameEditSubmit
];
