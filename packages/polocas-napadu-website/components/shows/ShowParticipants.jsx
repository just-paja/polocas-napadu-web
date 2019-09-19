import PropTypes from 'prop-types'
import React from 'react'

import { OptionalLink } from '../bindings'
import { List } from '../layout'
import { formatName } from '../profiles/names'
import { ShowParticipant } from '../proptypes'

function ShowParticipantsMap ({ participants }) {
  return participants
    .sort((a, b) =>
      a.role.name.localeCompare(b.role.name) ||
      formatName(a.profile).localeCompare(formatName(b.profile))
    )
    .map(participant => (
      <li key={participant.id}>
        <OptionalLink
          route='profile'
          params={{ slug: participant.profile.slug }}
          isLink={Boolean(participant.profile.group)}
        >
          {formatName(participant.profile)}
        </OptionalLink>
        {' '}
        ({participant.role.name})
      </li>
    ))
}

function ShowParticipantsComponent ({ participants }) {
  return (
    <List>
      <ul>
        <ShowParticipantsMap participants={participants} />
      </ul>
    </List>
  )
}

ShowParticipantsComponent.propTypes = {
  participants: PropTypes.arrayOf(ShowParticipant).isRequired
}

export const ShowParticipants = ShowParticipantsComponent
