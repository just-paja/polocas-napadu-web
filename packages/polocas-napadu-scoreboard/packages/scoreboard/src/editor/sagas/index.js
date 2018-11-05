import { put, select, takeEvery } from 'redux-saga/effects';

import { spectatorWindow } from '../../spectator/actions';
import { team } from '../../teams/actions';
import { teamEdit } from '../actions';

function* syncWindow() {
  const state = yield select(state => state);
  yield put(spectatorWindow.init({
    board: state.board,
  }));
}

function* closeForm(action) {
  yield put(teamEdit.hide(null, action.meta));
}

function* handleSpectatorJoin() {
  yield takeEvery(spectatorWindow.JOIN, syncWindow);
}

function* handleTeamEditSubmit() {
  yield takeEvery(team.DATA_CHANGE, closeForm);
}

export default [
  handleSpectatorJoin,
  handleTeamEditSubmit,
];
