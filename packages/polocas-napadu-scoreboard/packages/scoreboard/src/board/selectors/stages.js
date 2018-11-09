import {
  STAGE_FLOW,
  STAGES_GAME_SETUP,
  STAGES_SCORE_CHANGES,
  STAGES_TEAM_EDITS,
  STAGES_WITH_GAME,
} from '../constants';

const listNextStages = stage => STAGE_FLOW[stage] || [];

const getStageState = state => state.board.stage;

export const getCurrentStage = (state) => {
  const stageState = getStageState(state);
  return stageState.history[stageState.current];
};

export const getStage = state => getCurrentStage(state).stage;

export const canMoveBackward = state => getStageState(state).current > 0;
export const canMoveForward = (state) => {
  const stageState = getStageState(state);
  return stageState.current < (stageState.history.length - 1);
};

export const getStageHistory = state => getStageState(state).history;
export const getNextStages = state => listNextStages(getStage(state));

export const areScoreChangesAllowed = state => STAGES_SCORE_CHANGES.indexOf(getStage(state)) !== -1;
export const areTeamsEditable = state => STAGES_TEAM_EDITS.indexOf(getStage(state)) !== -1;
export const areGamesEditable = state => STAGES_GAME_SETUP.indexOf(getStage(state)) !== -1;

export const canAdvance = (state) => {
  const stage = getCurrentStage(state);
  return STAGES_WITH_GAME.indexOf(stage.stage) === -1 || stage.game !== null;
};

export const getCurrentGameId = (state) => getCurrentStage(state).game;
export const getLastGameId = (state) => {
  const currentGameId = getCurrentGameId(state);
  const stageState = getStageState(state);
  const lastGameId = stageState.history
    .reverse()
    .find(stage => stage.game !== null && stage.game !== currentGameId)
  return lastGameId || null;
};

export const getCurrentGame = (state) => {
  const games = state.board.games;
  const currentGameId = getCurrentGameId(state);
  return games.find(game => game.id === currentGameId);
};

export const getCurrentGameInspiration = (state) => {
  const currentGame = getCurrentGame(state);
  if (!currentGame) {
    return '';
  }
  return currentGame.inspiration;
};
