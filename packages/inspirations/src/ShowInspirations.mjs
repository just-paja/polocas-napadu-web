import React from 'react'

import { AlreadyStarted } from './AlreadyStarted.mjs'
import { AppError } from './AppError.mjs'
import { gql, useQuery } from '@apollo/client'
import { InsertInspiration } from './InsertInspiration.mjs'
import { MatchContext } from 'polocas-napadu-core/context.mjs'
import { NotFound } from './NotFound.mjs'
import { STAGE_INTRO } from 'polocas-napadu-core/constants.mjs'
import { useParams } from 'react-router'

import styles from './ShowInspirations.module.scss'

const GET_MATCH = gql`
  query MatchStage($matchId: Int!) {
    match(id: $matchId) {
      show {
        id
        name
        start
        totalInspirations
      }
      currentStage {
        created
        type
      }
    }
  }
`

const getStageView = match => {
  console.log(match)
  if (!match.currentStage || match.currentStage.type === STAGE_INTRO) {
    return <InsertInspiration show={match.show} />
  }
  return <AlreadyStarted />
}

export const ShowInspirations = () => {
  const { matchId } = useParams()
  const { loading, data, error } = useQuery(GET_MATCH, {
    variables: { matchId },
    pollInterval: 5000,
  })
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <AppError error={error} />
  }
  if (!data.match) {
    return <NotFound />
  }
  return (
    <MatchContext.Provider value={data.match}>
      <div className={styles.layout}>
        <h1>{data.match.show.name}</h1>
        {getStageView(data.match)}
        <p>Celkem jste nás inspirovali {data.match.show.totalInspirations}x</p>
      </div>
    </MatchContext.Provider>
  )
}
