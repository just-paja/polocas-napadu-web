import graphContainer from './GraphContainer.mjs'
import React, { useEffect, useRef, useState } from 'react'
import styles from './GameHistory.module.scss'

import { gql } from '@apollo/client'

const GET_MATCH_GAMES = gql`
  query Games($matchId: Int!) {
    match(id: $matchId) {
      show {
        games {
          type
          inspirations {
            text
          }
        }
      }
    }
  }
`

const GAME_TTL = 2000

export const GameHistory = graphContainer(({ data }) => {
  const [showGame, setShowGame] = useState(null)
  const timeout = useRef(null)
  const games = data.match.show.games
  const game = games[showGame]

  const unsetTimeout = () => clearTimeout(timeout.current)
  const queueNextGame = () => {
    unsetTimeout()
    timeout.current = setTimeout(showNextGame, GAME_TTL)
  }
  const showNextGame = () => {
    setShowGame(showGame < games.length - 1 ? showGame + 1 : 0)
    queueNextGame()
  }

  useEffect(() => {
    if (games.length) {
      setShowGame(0)
      queueNextGame()
    }

    return unsetTimeout
  }, [games])

  if (!game) {
    return null
  }

  return (
    <div className={styles.bigFont}>
      {game.inspirations.length > 0 ? (
        <div className={styles.inspiration}>
          {game.inspirations.map(inspiration => inspiration.text).join(', ')}
        </div>
      ) : null}
      <div className={styles.game}>({game.type})</div>
    </div>
  )
}, GET_MATCH_GAMES)
