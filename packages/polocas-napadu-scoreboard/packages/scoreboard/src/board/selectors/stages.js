import { STAGE_FLOW } from '../constants';

const listNextStages = stage => STAGE_FLOW[stage] || [];

const listPrevStages = (stage) =>
  Object.keys(STAGE_FLOW).filter(key => STAGE_FLOW[key].indexOf(stage) !== -1);

const getStageState = state => state.board.stage;

export const getStage = state => getStageState(state).current;
export const getStageHistory = state => getStageState(state).history;
export const getNextStages = state => listNextStages(getStage(state).stage);
export const getPrevStages = state => listPrevStages(getStage(state).stage);

export const getGameName = () => 'foo';
export const getGameInspiration = () => 'inspiration';
