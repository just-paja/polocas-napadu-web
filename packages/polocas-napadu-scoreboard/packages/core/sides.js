import {
  CONTESTANT_GUEST,
  CONTESTANT_HOME,
  TEAM_SIDE_LEFT,
  TEAM_SIDE_RIGHT,
} from 'core/constants';

export const getContestantTypeBySide = (side) => {
  if (side === TEAM_SIDE_LEFT) {
    return CONTESTANT_HOME;
  } else if (side === TEAM_SIDE_RIGHT) {
    return CONTESTANT_GUEST;
  }
  throw new Error(`Unknown side, we support just ${TEAM_SIDE_LEFT} and ${TEAM_SIDE_RIGHT}`);
};

export const getContestantBySide = (contestants, side) => {
  const type = getContestantTypeBySide(side);
  return contestants.find(contestant => contestant.contestantType === type);
};
