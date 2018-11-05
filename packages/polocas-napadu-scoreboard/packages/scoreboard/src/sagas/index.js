import keepAlive from 'redux-saga-restart';

import { all, fork } from 'redux-saga/effects';
import { logError, compatLogWarning } from '../clientLogger';

import board from '../board/sagas';
import editor from '../editor/sagas';
import spectator from '../spectator/sagas';

const sagas = [
  ...board,
  ...editor,
  ...spectator,
];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(keepAlive(saga, {
    onEachError: compatLogWarning,
    onFail: logError,
  }))));
}
