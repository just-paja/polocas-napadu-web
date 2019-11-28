import React from 'react'

import { formatName } from '../profiles/names'
import { Link } from '../bindings'

function getActorName (foul) {
  if (foul.player && foul.player.profile) {
    return formatName(foul.player.profile)
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
      <Link route="foulTypeDetail" params={{ slug: foul.foulType.slug}}>
        <a>{foul.foulType.name}</a>
      </Link>
      {actorName ? ` (${actorName})` : null}
    </>
  )
}
