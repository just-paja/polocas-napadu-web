import camelCase from 'camelcase'
import classnames from 'classnames'
import React from 'react'
import styles from './TeamDetails.module.scss'

import { TeamScore } from './TeamScore.mjs'
import { TEAM_LOGO_DEFAULT } from '@polocas-napadu/core/constants.mjs'

const generatePenalties = number => {
  const items = []
  for (let i = 0; i < number; i++) {
    items.push(<span key={i} className={styles.penalty} />)
  }
  return items
}

const TEAM_NAME_LENGTH = 3
const getTeamName = team =>
  team.band.name
    .replace(/[^a-z\u00C0-\u017F]/gi, '')
    .substr(0, TEAM_NAME_LENGTH)
    .toUpperCase()

export const TeamDetails = ({
  dimm = false,
  hideScore = false,
  side,
  team,
}) => {
  if (!team?.band?.name) {
    return null
  }

  return (
    <div
      className={classnames(
        styles.teamBubble,
        styles[camelCase(`teamBubble-${side}`)],
        {
          [styles.dimm]: dimm,
        }
      )}
      style={{ backgroundColor: team.color }}
    >
      <div
        className={classnames(
          styles.nameBar,
          styles[camelCase(`nameBar-${side}`)]
        )}
      >
        <img
          className={classnames(styles.logo, styles[camelCase(`logo-${side}`)])}
          src={team.logo || TEAM_LOGO_DEFAULT}
          alt="Band logo"
        />
        <span
          className={classnames(styles.name, styles[camelCase(`name-${side}`)])}
        >
          {getTeamName(team)}
        </span>
        {hideScore ? null : (
          <TeamScore score={team.score} backgroundColor={team.color} />
        )}
        <span
          className={classnames(
            styles.penalties,
            styles[camelCase(`penalties-${side}`)]
          )}
        >
          {generatePenalties(styles, team.penaltyPoints)}
        </span>
      </div>
    </div>
  )
}
