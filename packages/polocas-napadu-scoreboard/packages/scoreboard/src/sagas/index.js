import keepAlive from 'redux-saga-restart';

import { all, fork } from 'redux-saga/effects';
import { logError, compatLogWarning } from '../clientLogger';

const sagas = [];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(keepAlive(saga, {
    onEachError: compatLogWarning,
    onFail: logError,
  }))));
}
