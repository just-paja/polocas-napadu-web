import classnames from 'classnames'
import moment from 'moment'
import React from 'react'
import styles from './MatchProgress.module.scss'

import { FaExclamationTriangle, FaFlag, FaStopwatch } from 'react-icons/fa'
import { Foul } from './Foul'
import { STAGE_INTRO, getStageOption } from './stages'
import { gql } from 'apollo-boost'
import { MatchStage } from './MatchStage'
import { ScorePoint } from './ScorePoint'
import { withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const QUERY_SHOW = gql`
  query GetMatch($id: Int!) {
    match(id: $id) {
      contestantGroups {
        id
        band {
          name
          logo
        }
        score
        penaltyPoints
        fouls {
          id
          created
          contestantGroup {
            band {
              name
            }
          }
          foulType {
            name
            slug
          }
          player {
            profile {
              alias
              name
            }
          }
        }
      }
      scorePoints {
        id
        contestantGroup {
          band {
            name
          }
        }
        created
      }
      stages {
        type
        id
        created
        game {
          id
          rules {
            name
            slug
          }
          inspirations {
            id
            text
          }
          start
          end
        }
      }
    }
  }
`

function getFouls (match) {
  return match.contestantGroups.reduce(
    (acc, group) => [...acc, ...group.fouls],
    []
  )
}

function getScorePoints (match) {
  return match.scorePoints.map(point => ({
    ...point,
    object: 'scorePoint'
  }))
}

function sortByDate (a, b) {
  if (a.created > b.created) {
    return 1
  }
  if (b.created > a.created) {
    return -1
  }
  return 0
}

function sortByScore (a, b) {
  if (a.score > b.score) {
    return -1
  }
  if (b.score > a.score) {
    return 1
  }
  return 0
}

function padLeft (number) {
  if (number < 10) {
    return `0${number}`
  }
  return number
}

function getTimerValue (time, start) {
  const duration = moment.duration(
    moment(time).diff(start, 'seconds'),
    'seconds'
  )
  return `${padLeft(duration.hours())}:${padLeft(duration.minutes())}:${padLeft(
    duration.seconds()
  )}`
}

function renderEvent (event, start) {
  const stageOption = getStageOption(event)
  let content = null
  let Icon = null
  let className
  let key = null
  if (event.object === 'scorePoint') {
    content = <ScorePoint point={event} />
    Icon = FaFlag
    key += 'scorePoint'
  }
  if (stageOption && !stageOption.ignore) {
    content = <MatchStage stage={event} />
    Icon = FaStopwatch
    className = styles.routine
    key += 'stage'
  }
  if (event.foulType) {
    content = <Foul foul={event} />
    Icon = FaExclamationTriangle
    className = styles.foul
    key += 'foul'
  }
  if (!content) {
    return null
  }
  const time = start
    ? getTimerValue(event.created, start)
    : moment(event.created).format('LTS')
  return (
    <div className={classnames(styles.event, className)} key={key + event.id}>
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

function renderScore (match) {
  return match.contestantGroups.sort(sortByScore).map(group => (
    <div key={group.id}>
      {group.band.name}: {group.score}
    </div>
  ))
}

export function MatchProgressComponent ({ data, t }) {
  const { match } = data
  if (!match) {
    return null
  }
  const log = [
    ...getFouls(match),
    ...getScorePoints(match),
    ...match.stages
  ].sort(sortByDate)
  const start = log.find(event => event.type === STAGE_INTRO)
  if (!start) {
    return <div className={styles.log}>{t('matchHasNotStartedYet')}</div>
  }
  return (
    <div className={styles.log}>
      {renderScore(match)}
      {log.map(logEvent => renderEvent(logEvent, start ? start.created : null))}
    </div>
  )
}

export const MatchProgress = withTranslation(['common'])(
  withQuery({ query: QUERY_SHOW })(MatchProgressComponent)
)
