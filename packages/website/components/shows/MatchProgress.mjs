import classnames from 'classnames'
import moment from 'moment'
import React from 'react'
import styles from './MatchProgress.module.scss'

import { FaExclamationTriangle, FaFlag, FaStopwatch } from 'react-icons/fa'
import { Foul } from './Foul.mjs'
import { STAGE_INTRO, getStageOption } from './stages.mjs'
import { MatchStage } from './MatchStage.mjs'
import { ScorePoint } from './ScorePoint.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'

function getFouls(match) {
  return match.contestantGroups.reduce(
    (acc, group) => [...acc, ...group.fouls],
    []
  )
}

function getScorePoints(match) {
  return match.scorePoints.map(point => ({
    ...point,
    object: 'scorePoint',
  }))
}

function sortByDate(a, b) {
  if (a.created > b.created) {
    return 1
  }
  if (b.created > a.created) {
    return -1
  }
  return 0
}

function sortByScore(a, b) {
  if (a.score > b.score) {
    return -1
  }
  if (b.score > a.score) {
    return 1
  }
  return 0
}

const minPadding = 10

function padLeft(number) {
  if (number < minPadding) {
    return `0${number}`
  }
  return number
}

function getTimerValue(time, start) {
  const duration = moment.duration(
    moment(time).diff(start, 'seconds'),
    'seconds'
  )
  return `${padLeft(duration.hours())}:${padLeft(duration.minutes())}:${padLeft(
    duration.seconds()
  )}`
}

function MatchEvent({ event, start }) {
  const stageOption = getStageOption(event)
  let content = null
  let Icon = null
  let className
  if (event.object === 'scorePoint') {
    content = <ScorePoint point={event} />
    Icon = FaFlag
  }
  if (stageOption && !stageOption.ignore) {
    content = <MatchStage stage={event} />
    Icon = FaStopwatch
    className = styles.routine
  }
  if (event.foulType) {
    content = <Foul foul={event} />
    Icon = FaExclamationTriangle
    className = styles.foul
  }
  if (!content) {
    return null
  }
  const time = start
    ? getTimerValue(event.created, start)
    : moment(event.created).format('LTS')
  return (
    <div className={classnames(styles.event, className)}>
      <time
        dateTime={moment(event.created).format()}
        title={moment(event.created).format('LL LTS')}
      >
        {time}
      </time>{' '}
      {Icon && <Icon />} {content}
    </div>
  )
}

function renderScore(match) {
  return match.contestantGroups.sort(sortByScore).map(group => (
    <div key={group.id}>
      {group.band.name}: {group.score}
    </div>
  ))
}

const addKey = (eventType, array) =>
  array.map(item => ({ ...item, eventType, key: `${eventType}-${item.id}` }))

export const MatchProgress = withTranslation(({ matchId, t }) => {
  if (!matchId) {
    return null
  }
  // @TODO: Fix this using recoil when I land the plane
  const match = null
  if (!match) {
    return null
  }
  const log = [
    ...addKey('foul', getFouls(match)),
    ...addKey('score', getScorePoints(match)),
    ...addKey('stage', match.stages),
  ].sort(sortByDate)
  const start = log.find(event => event.type === STAGE_INTRO)
  if (!start) {
    return <div className={styles.log}>{t('matchHasNotStartedYet')}</div>
  }
  return (
    <div className={styles.log}>
      {renderScore(match)}
      {log.map(logEvent => (
        <MatchEvent
          key={logEvent.key}
          event={logEvent}
          start={start?.created}
        />
      ))}
    </div>
  )
})
