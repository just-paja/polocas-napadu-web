import React from 'react'
import styles from './GameInspiration.module.scss'

import { useMatch } from 'polocas-napadu-core/context.mjs'

export const GameInspiration = () => {
  const { game, inspirations } = useMatch().currentStage
  const list = game?.inspirations?.length ? game.inspirations : inspirations
  return (
    <div>
      {game && game.type ? (
        <div className={styles.game}>{game.type}</div>
      ) : null}
      {list.length > 0 ? (
        <div className={styles.inspiration}>
          {list.map(inspiration => inspiration.text).join(', ')}
        </div>
      ) : null}
    </div>
  )
}
