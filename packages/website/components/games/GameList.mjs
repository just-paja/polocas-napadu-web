import React from 'react'

import { Link } from '../links.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n'

export const GameList = withTranslation(({ gameRules, t }) => {
  return (
    <>
      <p>{t('gameRulesStats', { total: gameRules.length })}</p>
      <ul>
        {gameRules.map(rules => (
          <li key={rules.slug}>
            <Link route="gameDetail" params={{ slug: rules.slug }}>
              {rules.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
})
