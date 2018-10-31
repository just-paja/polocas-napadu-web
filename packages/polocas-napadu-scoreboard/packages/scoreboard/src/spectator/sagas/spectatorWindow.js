import { takeEvery } from 'redux-saga/effects';

import { spectatorWindow } from '../actions';

let window = null;

const closeWindow = () => {
  if (!window) {
    window.close();
  }
};

const openWindow = () => {
  if (!window) {
    window = global.window.open();
  }
};

function* handleWindowClose() {
    yield takeEvery(spectatorWindow.CLOSE, closeWindow);
}

function* handleWindowOpen() {
    yield takeEvery(spectatorWindow.OPEN, openWindow);
}

export default [
  handleWindowClose,
  handleWindowOpen,
];
