import { createRoutine } from '../../actions/routines';
import { LIST_IDENTIFIER, LIST_ACTIONS, createListRoutine } from '../../lists';

export const flipSides = createRoutine('FLIP_SIDES', ['TRIGGER']);

export const game = createListRoutine('GAME', [
  'GAME_CHANGE',
  'CHANGE',
  'INSPIRATION_CHANGE',
], 'id');

export const stage = createRoutine('STAGE', [
  'ADD',
  'BACK',
  'FORWARD',
  'GAME_SET',
  'CHANGE',
]);

export const topicDownload = createRoutine('TOPIC_DOWNLOAD', [
  'FAILURE',
  'FULFILL',
  'REQUEST',
  'SUCCESS',
  'TRIGGER',
]);

export const topic = createRoutine('TOPIC', [
  'ADD',
  'DISCARD',
  'GENERATE',
  'SET_SOURCE',
  'SUGGEST',
  'USE',
]);

// Necessary to change game reducer
topic[LIST_ACTIONS] = [topic.SUGGEST];
topic[LIST_IDENTIFIER] = game[LIST_IDENTIFIER];
