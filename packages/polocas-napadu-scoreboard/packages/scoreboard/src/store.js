import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

let store;

export default function configureStore(initialState = {}) {
  const middlewares = [];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  store = createStore(
    reducers,
    initialState,
    compose(...enhancers)
  );

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
