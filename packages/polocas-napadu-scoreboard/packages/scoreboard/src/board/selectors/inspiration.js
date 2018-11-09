export const getSuggestedInspiration = state => state.board.topics.suggestion;

export const getAvailableInspirations = state => state.board.topics.available;

export const getInspirationSource = state => state.board.topics.source;

export const getInspirationCount = state => (
  state.board.topics.available.length
  + state.board.topics.used.length
);
