import Alert from 'react-bootstrap/Alert'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './ShowParticipants.module.scss'

import { OptionalLink } from '../links.mjs'
import { List } from '../layout/List.mjs'
import { formatName } from '../profiles/names.mjs'
import { ShowParticipant } from 'polocas-napadu-core/proptypes'
import { useTranslation } from 'next-i18next'

function ShowParticipantsMap({ participants }) {
  return participants.map(participant => (
    <li key={participant.id}>
      <OptionalLink
        route="profile"
        params={{ slug: participant.profile.slug }}
        isLink={Boolean(participant.profile.group)}
      >
        {formatName(participant.profile)}
      </OptionalLink>{' '}
      ({participant.role.name})
    </li>
  ))
}

export function ShowParticipants({ participants }) {
  const { t } = useTranslation()
  return (
    <List>
      {participants.length > 0 ? (
        <ul className={styles.list}>
          <ShowParticipantsMap participants={participants} />
        </ul>
      ) : (
        <Alert variant="light">{t('noShowParticipants')}</Alert>
      )}
    </List>
  )
}

ShowParticipants.propTypes = {
  participants: PropTypes.arrayOf(ShowParticipant).isRequired,
}
