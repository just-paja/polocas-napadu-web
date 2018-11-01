import createSagaMiddleware from 'redux-saga';

import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

import { listenToParentWindow, passMessagesToSpectator } from './spectator';

import * as constants from './spectator/constants';

export const sagaMiddleware = createSagaMiddleware();

const DEVELOPMENT = process.env.NODE_ENV !== 'production'; // eslint-disable-line no-undef
const SPECTATOR = document.location.search.indexOf('?spectator') !== -1;

let store;

export default function configureStore(initialState = {}) {
  const middlewares = [];
  let state = { ...initialState };

  middlewares.push(sagaMiddleware);

  if (SPECTATOR) {
    state = {
      ...state,
      spectator: {
        ...state.spectator,
        role: constants.ROLE_SPECTATOR,
      },
    };
  } else {
    middlewares.push(passMessagesToSpectator);
  }

  if (DEVELOPMENT) {
    middlewares.push(createLogger({
      collapsed: true,
      diff: false,
    }));
  }

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  store = createStore(
    reducers,
    state,
    compose(...enhancers)
  );

  if (SPECTATOR) {
    listenToParentWindow(store);
  }

  // Create hook for async sagas
  store.sagaMiddleware = sagaMiddleware;
  store.runSaga = sagaMiddleware.run;
  return store;
}

if (module.hot) {
  module.hot.accept('./reducers', () => {
    if (store) {
      // eslint-disable-next-line global-require
      store.replaceReducer(require('./reducers').default);
      console.info(':: Hot reload reducers');
    }
  });
}
