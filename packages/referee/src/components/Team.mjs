import React from 'react'

import { getContestantTypeBySide } from '@polocas-napadu/core/sides.mjs'
import { TeamDetails } from './TeamDetails.mjs'
import { useMatch } from '@polocas-napadu/core/context.mjs'

export const Team = ({ children, side }) => {
  const { contestantGroups } = useMatch()
  const contestantType = getContestantTypeBySide(side)
  const team = contestantGroups.find(
    group => group.contestantType === contestantType
  )

  if (!team) {
    return null
  }

  return (
    <div className="fs-3 p-3" style={{ backgroundColor: team.color }}>
      <TeamDetails team={team} />
      {children}
    </div>
  )
}
