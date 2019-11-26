import PropTypes from 'prop-types'
import React from 'react'

import { GameRules } from '../proptypes'
import { gql } from 'apollo-boost'
import { withQuery } from '../graphql'
import { Link } from '../bindings'

const QUERY_GAME_LIST = gql`
  query getGameRulesList {
    gameRulesList {
      name,
      slug,
    }
  }
`

const GameListComponent = ({ data, t }) => {
  return (
    <ul>
      {data.gameRulesList.map(rules => (
        <li key={rules.slug}>
          <Link route='gameDetail' params={{ slug: rules.slug }}>
            <a>{rules.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

GameListComponent.propTypes = {
  data: PropTypes.shape({
    gameRulesList: PropTypes.arrayOf(GameRules).isRequired
  })
}

export const GameList = withQuery({ query: QUERY_GAME_LIST })(GameListComponent)
