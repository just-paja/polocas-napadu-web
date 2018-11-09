import { handleActions } from 'redux-actions';

import { topic, topicDownload } from '../actions';

const doesInspirationExist = state => topic => {
  return state.available.indexOf(topic) === -1
  && state.discarded.indexOf(topic) === -1
  && state.used.indexOf(topic) === -1;
};

const initialState = {
  available: [],
  discarded: [],
  used: [],
  source: null,
  suggestion: null,
};

const removeTopic = (arr, item) =>
  arr.filter(arrItem => arrItem !== item);

export default handleActions({
  [topic.ADD]: (state, action) => {
    if (state.available.indexOf(action.payload) !== -1) {
      return state;
    }
    return {
      ...state,
      available: [
        ...state.available,
        action.payload,
      ],
    };
  },
  [topic.USE]: (state, action) => ({
    ...state,
    available: removeTopic(state.available, action.payload),
    used: [
      ...state.used,
      action.payload,
    ],
  }),
  [topic.DISCARD]: (state, action) => ({
    ...state,
    available: removeTopic(state.available, action.payload),
    used: removeTopic(state.used, action.payload),
    discarded: [
      ...state.used,
      action.payload,
    ],
  }),
  [topic.SUGGEST]: (state, action) => ({
    ...state,
    suggestion: action.payload,
  }),
  [topic.SET_SOURCE]: (state, action) => ({
    ...state,
    source: action.payload,
  }),
  [topicDownload.SUCCESS]: (state, action) => {
    const newTopics = action.payload
      .filter(item => item)
      .filter(doesInspirationExist(state));
    return {
      ...state,
      available: [
        ...state.available,
        ...newTopics,
      ],
    };
  },
}, initialState);
