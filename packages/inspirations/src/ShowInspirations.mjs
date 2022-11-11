import React from 'react'

import { AlreadyStarted } from './AlreadyStarted.mjs'
import { Heading, Main } from 'polocas-napadu-ui/content.mjs'
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
      <Main className={styles.main}>
        <Heading>{data.match.show.name}</Heading>
        <div className={styles.layout}>
          {getStageView(data.match)}
          <p>
            Celkem jste nás inspirovali {data.match.show.totalInspirations}x
          </p>
        </div>
      </Main>
    </MatchContext.Provider>
  )
}
