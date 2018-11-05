import { put, select, takeEvery } from 'redux-saga/effects';

import { spectatorWindow } from '../actions';
import { app } from '../../actions';
import { isSpectator } from '../selectors';

import SpectatorWindow from '../SpectatorWindow';

function* initWindowState(action) {
  if (yield select(isSpectator)) {
    yield put(app.reset(action.payload));
  }
}

function* handleWindowClose() {
  yield takeEvery(spectatorWindow.CLOSE, SpectatorWindow.close);
}

function* handleWindowInit() {
  yield takeEvery(spectatorWindow.INIT, initWindowState);
}

function* handleWindowOpen() {
  yield takeEvery(spectatorWindow.OPEN, SpectatorWindow.open);
}

export default [
  handleWindowClose,
  handleWindowInit,
  handleWindowOpen,
];
