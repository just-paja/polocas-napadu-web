import { getSideTeamId, getTeam } from '../../board/selectors';

const hasTeamData = team => Boolean(
  team.name
  // && team.logo
);

export const teamNeedsEdit = (state, side) => {
  const teamId = getSideTeamId(state, side);
  const team = getTeam(state, teamId);
  return Boolean(state.monitor.edit[teamId] || !hasTeamData(team));
};
