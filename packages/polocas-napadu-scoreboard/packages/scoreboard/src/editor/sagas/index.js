import { put, select, takeEvery } from 'redux-saga/effects';

import { spectatorWindow } from '../../spectator/actions';
import { team } from '../../teams/actions';
import { teamEdit } from '../actions';
import { monitorOnly } from '../../spectator/sagas';

function* syncWindow() {
  const state = yield select(state => state);
  yield put(spectatorWindow.init({
    board: state.board,
  }));
}

function* closeForm(action) {
  yield put(teamEdit.hide(null, action.meta));
}

const handleSpectatorJoin = monitorOnly(function* () {
  yield takeEvery(spectatorWindow.JOIN, syncWindow);
});

const handleTeamEditSubmit = monitorOnly(function* () {
  yield takeEvery(team.DATA_CHANGE, closeForm);
});

export default [
  handleSpectatorJoin,
  handleTeamEditSubmit,
];
