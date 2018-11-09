import csv from 'csvtojson';

import { fork, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { spectatorWindow } from '../../spectator/actions';
import { game, topic, topicDownload } from '../../board/actions';
import { getInspirationSource } from '../../board/selectors';
import { team } from '../../teams/actions';
import { gameEdit, teamEdit } from '../actions';
import { monitorOnly } from '../../spectator/sagas';

function* syncWindow() {
  const state = yield select(state => state);
  yield put(spectatorWindow.init({
    board: state.board,
  }));
}

function* closeTeamForm(action) {
  yield put(teamEdit.hide(null, action.meta));
}

function* closeGameForm(action) {
  yield put(gameEdit.hide());
}

function* downloadTopics() {
  const source = yield select(getInspirationSource);
  yield put(topicDownload.request());
  try {
    const csvData = yield fetch(source).then(response => response.text());
    const records = yield csv().fromString(csvData);
    yield put(topicDownload.success(records.map(record => record.Inspirace)));
  } catch (err) {
    yield put(topicDownload.failure(err));
  } finally {
    yield put(topicDownload.fulfill());
  }
}

function* watchInspiration(action) {
  yield call(downloadTopics);
  yield delay(3000);
  yield fork(watchInspiration);
}

const handleSpectatorJoin = monitorOnly(function* () {
  yield takeEvery(spectatorWindow.JOIN, syncWindow);
});

const handleTeamEditSubmit = monitorOnly(function* () {
  yield takeEvery(team.DATA_CHANGE, closeTeamForm);
});

const handleGameEditSubmit = monitorOnly(function* () {
  yield takeEvery([game.CHANGE, game.ADD], closeGameForm);
});

const handleLoadTopics = monitorOnly(function* () {
  yield takeEvery(topicDownload.TRIGGER, downloadTopics);
});

const handleInspirationSourceChange = monitorOnly(function* () {
  yield takeLatest(topic.SET_SOURCE, watchInspiration);
});

export default [
  handleGameEditSubmit,
  handleInspirationSourceChange,
  handleLoadTopics,
  handleSpectatorJoin,
  handleTeamEditSubmit,
];
