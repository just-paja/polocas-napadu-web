import * as constants from '../constants';

export const getSides = state => state.board.teams.sides;
export const getTeam = (state, team) => state.board.teams[team];

export const getSideTeamId = (state, side) => getSides(state)[side];

export const getSideTeam = (state, side) => getTeam(state, getSideTeamId(state, side));

export const getTeamSide = (state, teamId) => {
  const sides = getSides(state);
  return Object.keys(sides).find(side => sides[side] === teamId);
};

export const getOtherSide = (state, side) =>
  Object.keys(getSides(state)).find(stateSide => stateSide !== side);

export const getOtherSideTeamId = (state, teamId) =>
  getSideTeamId(state, getOtherSide(state, getTeamSide(state, teamId)));

export const getScore = (state, side) => {
  console.log(getSideTeam(state, side), side);
  return getSideTeam(state, side).score;
};

export const getTeamGuest = state => getTeam(state, constants.TEAM_GUEST);
export const getTeamHome = state => getTeam(state, constants.TEAM_HOME);
