import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import configureStore from './store';
import sagas from './sagas';

import * as serviceWorker from './serviceWorker';

import './index.css';

const store = configureStore({});

const render = (RootComponent) => {
  ReactDOM.render(
    <RootComponent store={store} />,
    document.getElementById('root')
  );
};

let sagaTask;

const startUp = () => {
  sagaTask = store.runSaga(sagas);
  render(App);
};

startUp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    render(require('./App').default);
    console.info(':: Hot reload root component');
  });
  module.hot.accept('./sagas', () => {
    // eslint-disable-next-line global-require
    const reloadSagas = require('./sagas').default;
    sagaTask.cancel();
    sagaTask.done.then(() => {
      sagaTask = store.runSaga(reloadSagas);
      console.info(':: Hot reload sagas');
    });
  });
}
