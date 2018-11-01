import SpectatorWindow from './SpectatorWindow';

export const passMessagesToSpectator = store => next => (action) => {
  next(action);
  SpectatorWindow.sendMessage(action);
};

export const listenToParentWindow = (store) => {
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type && event.data.type.indexOf('@@') === -1) {
      store.dispatch(event.data);
    }
  });
};
