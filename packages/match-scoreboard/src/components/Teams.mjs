import React from 'react'

import { useMatch } from 'polocas-napadu-core/context.mjs'
import { TeamDetails } from './TeamDetails.mjs'
import {
  CONTESTANT_HOME,
  CONTESTANT_GUEST,
} from 'polocas-napadu-core/constants.mjs'

const getGroup = (groups, type) =>
  groups.find(group => group.contestantType === type)

export const Teams = ({ hideScore = false }) => {
  const { contestantGroups, currentStage } = useMatch()
  console.log(useMatch())

  const home = getGroup(contestantGroups, CONTESTANT_HOME)
  const guest = getGroup(contestantGroups, CONTESTANT_GUEST)

  const dimmTeam = contestantGroupId => {
    if (currentStage && currentStage.scorePointPoll) {
      return currentStage.scorePointPoll.votings.some(
        voting =>
          voting.contestantGroup &&
          voting.contestantGroup.id !== contestantGroupId &&
          !voting.closed
      )
    }
    return false
  }

  return (
    <div className="d-flex justify-content-center w-100">
      {home && (
        <TeamDetails
          dimm={dimmTeam(home.id)}
          hideScore={hideScore}
          side="left"
          team={home}
        />
      )}
      {guest && (
        <TeamDetails
          dimm={dimmTeam(guest.id)}
          hideScore={hideScore}
          side="right"
          team={guest}
        />
      )}
    </div>
  )
}
