import PropTypes from 'prop-types'
import React from 'react'

import { GameRules } from 'polocas-napadu-core/proptypes'
import { gql } from 'apollo-boost'
import { Link } from '../bindings'
import { withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const QUERY_GAME_LIST = gql`
  query getGameRulesList {
    gameRulesList {
      name
      slug
    }
  }
`

const GameListComponent = ({ data, t }) => {
  const allRules = data.gameRulesList
  return (
    <>
      <p>{t('gameRulesStats', { total: allRules.length })}</p>
      <ul>
        {allRules.map(rules => (
          <li key={rules.slug}>
            <Link route="gameDetail" params={{ slug: rules.slug }}>
              {rules.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

GameListComponent.propTypes = {
  data: PropTypes.shape({
    gameRulesList: PropTypes.arrayOf(GameRules).isRequired,
  }),
}

export const GameList = withQuery({ query: QUERY_GAME_LIST })(
  withTranslation('common')(GameListComponent)
)
