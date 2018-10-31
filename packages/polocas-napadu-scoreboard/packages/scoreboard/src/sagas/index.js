import keepAlive from 'redux-saga-restart';

import { all, fork } from 'redux-saga/effects';
import { logError, compatLogWarning } from '../clientLogger';

import editor from '../editor/sagas';

const sagas = [
  ...editor,
];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(keepAlive(saga, {
    onEachError: compatLogWarning,
    onFail: logError,
  }))));
}
