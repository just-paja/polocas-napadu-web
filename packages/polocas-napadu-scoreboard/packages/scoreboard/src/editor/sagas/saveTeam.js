import { put, takeEvery } from 'redux-saga/effects';

import { teamHome, teamGuest } from '../../board/actions';

function* propagateTeamDataChange(action) {
  yield console.log('This should update the scoreboard window');
}

function* handleTeamSubmit() {
  yield takeEvery([
    teamGuest.DATA_CHANGE,
    teamHome.DATA_CHANGE,
  ], propagateTeamDataChange);
}

export default [
  handleTeamSubmit,
];
