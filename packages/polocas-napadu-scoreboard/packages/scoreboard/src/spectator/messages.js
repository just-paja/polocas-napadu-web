import SpectatorWindow from './SpectatorWindow';

import { spectatorWindow } from './actions';

const isAcceptableReduxAction = action => (
  action
  && action.type
  && typeof action.type === 'string'
  && action.type.indexOf('@@') === -1
);

export const passMessagesToSpectator = store => next => (action) => {
  next(action);
  if (action.type !== spectatorWindow.JOIN) {
    SpectatorWindow.sendMessage(action);
  }
};

export const listenToSpectatorSync = (store) => {
  global.window.addEventListener('message', (event) => {
    if (isAcceptableReduxAction(event.data)) {
      if (event.data.type === spectatorWindow.JOIN) {
        store.dispatch(event.data);
      }
    }
  });
};

export const listenToParentWindow = (store) => {
  window.addEventListener('message', (event) => {
    if (isAcceptableReduxAction(event.data)) {
      store.dispatch(event.data);
    }
  });
};

export const reportToMonitor = (store) => {
  console.log(window.opener === window);
  if (window.opener) {
    window.opener.postMessage(spectatorWindow.join(), window.location.origin);
  }
};
