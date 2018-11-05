import { call, select } from 'redux-saga/effects';

import { isSpectator } from '../selectors';

export const spectatorOnly = (saga) => function* (...args) {
  const spectator = yield select(isSpectator);
  if (spectator) {
    yield call(saga, ...args);
  }
}
