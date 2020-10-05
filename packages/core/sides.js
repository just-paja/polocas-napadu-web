"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContestantBySide = exports.getContestantTypeBySide = void 0;

var _constants = require("./constants");

const getContestantTypeBySide = side => {
  if (side === _constants.TEAM_SIDE_LEFT) {
    return _constants.CONTESTANT_HOME;
  } else if (side === _constants.TEAM_SIDE_RIGHT) {
    return _constants.CONTESTANT_GUEST;
  }

  throw new Error(`Unknown side, we support just ${_constants.TEAM_SIDE_LEFT} and ${_constants.TEAM_SIDE_RIGHT}`);
};

exports.getContestantTypeBySide = getContestantTypeBySide;

const getContestantBySide = (contestants, side) => {
  const type = getContestantTypeBySide(side);
  return contestants.find(contestant => contestant.contestantType === type);
};

exports.getContestantBySide = getContestantBySide;