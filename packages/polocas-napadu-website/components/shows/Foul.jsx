import React from 'react'

function getActorName (foul) {
  if (foul.player && foul.player.profile) {
    return foul.player.profile.name
  }
  if (foul.contestantGroup && foul.contestantGroup.band) {
    return foul.contestantGroup.band.name
  }
  return null
}

export function Foul ({ foul }) {
  const actorName = getActorName(foul)
  return (
    <>
      {foul.foulType.name}
      {actorName ? ` (${actorName})` : null}
    </>
  )
}