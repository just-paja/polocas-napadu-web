import React from 'react'

function getActorName(point) {
  if (point.contestantGroup && point.contestantGroup.band) {
    return point.contestantGroup.band.name
  }
  return null
}

export function ScorePoint({ point }) {
  const actorName = getActorName(point)
  return <>{actorName}</>
}
