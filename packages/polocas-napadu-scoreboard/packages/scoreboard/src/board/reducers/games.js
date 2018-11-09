import gameReducer, { initialState } from './game';

import { game, topic } from '../actions';
import { createListReducer } from '../../lists';

export default createListReducer([
  game,
  topic,
], gameReducer, initialState);
