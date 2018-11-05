import { app } from './actions';

export const localStorageMiddleware = store => next => (action) => {
  localStorage.setItem('boardState', JSON.stringify(store.getState()));
  next(action);
};

export const initLocalStorageMiddleware = (store) => {
  const boardStateSerialized = localStorage.getItem('boardState');
  if (boardStateSerialized) {
    try {
      const boardState = JSON.parse(boardStateSerialized);
      store.dispatch(app.reset(boardState));
    } catch(err) {
      console.error('Board state is corrupted');
      console.error(err);
    }
  }
};
