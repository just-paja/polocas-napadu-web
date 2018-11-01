import { combineReducers } from 'redux';

import role from './role';
import window from './spectatorWindow';

export default combineReducers({
  role,
  window,
});
