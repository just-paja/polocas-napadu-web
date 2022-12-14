import React from 'react'

export const TeamDetails = ({ team }) => {
  if (!team?.band?.name) {
    return null
  }

  return (
    <div className="d-flex" style={{ backgroundColor: team.color }}>
      <span className="justify-content-center align-items-center">
        {team.band.name}
      </span>
      <span className="m-auto">
        {team.score}/{team.penaltyPoints || 0}
      </span>
    </div>
  )
}
