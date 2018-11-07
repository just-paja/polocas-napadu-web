import gameReducer, { initialState } from './game';

import { game } from '../actions';
import { createListReducer } from '../../lists';

export default createListReducer(game, gameReducer, initialState);
