import { takeEvery } from 'redux-saga/effects';

import { spectatorWindow } from '../actions';

import SpectatorWindow from '../SpectatorWindow';

function* handleWindowClose() {
  yield takeEvery(spectatorWindow.CLOSE, SpectatorWindow.close);
}

function* handleWindowOpen() {
  yield takeEvery(spectatorWindow.OPEN, SpectatorWindow.open);
}

export default [
  handleWindowClose,
  handleWindowOpen,
];
