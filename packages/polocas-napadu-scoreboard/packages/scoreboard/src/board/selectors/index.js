import * as constants from '../constants';

export const getSides = state => state.board.teams.sides;
export const getTeam = (state, team) => state.board.teams[team];

export const getSideTeamId = (state, side) => getSides(state)[side];

export const getSideTeam = (state, side) => getTeam(state, getSideTeamId(state, side));

export const getScore = (state, side) => {
  console.log(getSideTeam(state, side), side);
  return getSideTeam(state, side).score;
};

export const getTeamGuest = state => getTeam(state, constants.TEAM_GUEST);
export const getTeamHome = state => getTeam(state, constants.TEAM_HOME);
