import { STAGE_FLOW, STAGE_FLOW_BACK, STAGES_SCORE_CHANGES } from '../constants';

const listNextStages = stage => STAGE_FLOW[stage] || [];

const listPrevStages = stage => STAGE_FLOW_BACK[stage] || [];

const getStageState = state => state.board.stage;

export const getStage = state => getStageState(state).current;
export const getStageHistory = state => getStageState(state).history;
export const getNextStages = state => listNextStages(getStage(state).stage);
export const getPrevStages = state => listPrevStages(getStage(state).stage);

export const getGameName = () => 'foo';
export const getGameInspiration = () => 'inspiration';

export const areScoreChangesAllowed = state => STAGES_SCORE_CHANGES.indexOf(getStage(state).stage) !== -1;
